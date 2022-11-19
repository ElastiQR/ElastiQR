const fs = require('fs-extra');
var http = require('http');
const open = require('open');
const url = require('url');
const path = require('path');
const axios = require('axios');

const API_URL = 'http://localhost:3000/auth';
const CLIENT_URL = 'http://localhost:3001';

const storeToken = async (token, file) => {
    return fs.ensureDir(path.dirname(file))
            .then(() => {
                const userAuthInfo = JSON.stringify({token});
                const newFile = path.join(path.dirname(file), path.basename(file));
                fs.writeFile(newFile, userAuthInfo, 'utf8', (err) => {
                    if (err) throw (err)
                });
            })
}

const authorize = async (userID, authCode, expiration) => {
    return await axios.post(API_URL + '/authorizeCLI', {
        id: userID,
        code : authCode,
        expiration
    }).then( 
        (response) => { 
            return response.data.accessToken; 
        },
        (error) => { throw (error); } 
    );
}

const verify = (token) => {
    return axios({
        method: 'post',
        url: API_URL + '/verify',
        headers: { Authorization : 'Bearer ' + token }
    }).then(
        (response) => {
            return response.status;
        },
        (error) => { throw (error) }
    )
}

module.exports = {
    getToken: async (file, expiration) => {
        return new Promise((resolve, reject) => {
            fs.readFile(file, 'utf8', (err, token) => {
                if (err !== null || token === '') {
                    const server = http.createServer(async (req, res) => {
                        res.setHeader("Access-Control-Allow-Origin", CLIENT_URL);
                        const parsedUrl = url.parse(req.url, true);
                        const queryAsObject = parsedUrl.query;
                        const authCode = queryAsObject.code;
                        const userID = parseInt(queryAsObject.id);

                        try {
                            await authorize(userID, authCode, expiration)
                            .then(
                                async (result) => { 
                                    const accessToken = result; 
                                    await storeToken(accessToken, file);
                                }
                            );
                        } catch (err) {
                            console.log(err);
                            reject('Error with CLI authorization.');
                        }
                        res.end();
                
                        req.socket.end();
                        req.socket.destroy();
                        server.close();
                        resolve(true);
                    }).listen(8080);
                    open(CLIENT_URL + '/#/oauth');
                } else {
                    let parsedToken = JSON.parse(token);
                    verify(parsedToken.token)
                    .then(
                        (status) => {
                            if (status === 200) {
                                console.log('Saved Token is valid.');
                                resolve(true);
                            } else {
                                console.log('Expired or Invalid token.');
                                reject('Expired or Invalid Token');
                            }
                        }
                    )
                }
            })
        });
    }
}
