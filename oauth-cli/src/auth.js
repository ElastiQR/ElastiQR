const fs = require('fs-extra');
var http = require('http');
const open = require('open');
const url = require('url');
const path = require('path');
const axios = require('axios');

const API_URL = 'http://localhost:3000/auth';
const CLIENT_URL = 'http://localhost:3001';
const PORT = 8080;

const storeToken = async (token, file) => {
    return fs.ensureDir(path.dirname(file))
            .then(() => {
                const userAuthInfo = JSON.stringify({token});
                const newFile = path.join(path.dirname(file), path.basename(file));
                fs.writeFile(newFile, userAuthInfo, 'utf8', (err) => {
                    if (err) throw (err);
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
        (error) => { throw (error); }
    )
}

module.exports = {
    getToken: async (file, expiration) => {
        return new Promise((resolve, reject) => {
            fs.readFile(file, 'utf8', async (err, token) => {
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
                        } catch (error) {
                            console.log(error);
                            reject('Error with CLI authorization.');
                        }
                        res.end();
                
                        req.socket.end();
                        req.socket.destroy();
                        server.close();
                        resolve(true);
                    }).listen(PORT);

                    await open(CLIENT_URL + '/#/oauth?' + new URLSearchParams({ 
                        redirect_uri: `http://localhost:${PORT}` 
                    }), (process.platform == 'darwin') ? { newInstance: true } : {} );
                } else {
                    let parsedToken = JSON.parse(token);
                    try {
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
                        );
                    } catch (error) {
                        console.log(error);
                        reject('Token verification failed.');
                    }
                }
            })
        });
    }
}
