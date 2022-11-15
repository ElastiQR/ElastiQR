const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')
const mysql = require("mysql")
const db = require("../helpers/database")
const { OAuth2Client } = require('google-auth-library')
const logger = require("../helpers/logger")

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

function generateAccessToken (user, staySignedIn) {
    if (staySignedIn) 
        return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    else 
        return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "30m"});
}

module.exports = {
    signUpController: async (req,res) => {
        const user = req.body.name;
        const passwordHash = await bcrypt.hash(req.body.password,10);
        
        db.getConnection( async (err, connection) => {
            if (err) throw (err)
        
            const sqlSearch = "SELECT * FROM users WHERE username = ? LIMIT 1"
            const search_query = mysql.format(sqlSearch,[user])
            const sqlInsert = "INSERT INTO users (username, password) VALUES (?,?)"
        
            const insert_query = mysql.format(sqlInsert,[user, passwordHash])
        
            await connection.query (search_query, async (err, result) => {
            if (err) throw (err)
        
            logger.info("------> Search Results")
            logger.info(result.length)
        
            if (result.length != 0) {
                connection.release()
                logger.error("------> User already exists")
                res.sendStatus(409) 
            } else {
                await connection.query (insert_query, (err, result)=> {
                connection.release()
                if (err) throw (err)
                    logger.info ("--------> Created new User")
                    logger.info(result.insertId)
                    res.sendStatus(201)
                })
            }
            }) 
        
        }) 
    },

    loginUserController: (req, res)=> {
        const user = req.body.name
        const password = req.body.password
        const staySignedIn = req.body.staySignedIn

        db.getConnection ( async (err, connection)=> {
            if (err) throw (err)

            const sqlSearch = "SELECT * FROM users WHERE username = ? LIMIT 1"
            const search_query = mysql.format(sqlSearch,[user])

            await connection.query (search_query, async (err, result) => {
                connection.release()
                
                if (err) throw (err)
                if (result.length == 0) {
                logger.error("--------> User does not exist")
                res.sendStatus(404)
                } 
                else {
                    const hashedPassword = result[0].password
                
                    if (await bcrypt.compare(password, hashedPassword)) {
                        logger.info("---------> Login Successful")
                        logger.info("---------> Generating accessToken")
                        const token = generateAccessToken({user: user}, staySignedIn)   
                        logger.info(token)
                        res.json({
                            userID: result[0].userID,
                            accessToken: token
                        })
                    } else {
                        logger.error("User attempted to login with incorrect password.")
                        res.send("Password incorrect!")
                    } 
                }
            }) 
        }) 
    },
    googleLoginController: async (req, res) => {
        const token = req.body.token

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID
        });

        const { name, email, picture } = ticket.getPayload();       
        var user = {
            email,
            first: name.split(" ")[0],
            last: name.split(" ")[1],
            picture
        }

        db.getConnection ( async (err, connection)=> {
            if (err) throw (err)

            const sqlSearch = "SELECT * FROM users WHERE username = ? LIMIT 1"
            const search_query = mysql.format(sqlSearch,[user.email])

            const sqlInsert = `INSERT INTO users (username, firstname, lastname, isGoogle)
                               VALUES (?,?,?,1)`
            const insert_query = mysql.format(sqlInsert,[user.email, user.first, user.last])

            await connection.query (search_query, async (err, result) => {
                
                if (err) throw (err)
                if (result.length == 0) {
                    await connection.query(insert_query, async (err, results) => {
                        if (err) throw(err)

                        logger.info("---------> Creating Google User")
                        logger.info(results.insertId)
                    })
                    await connection.query(search_query, async (err, results)=> {
                        connection.release()

                        if (err) throw(err)
                        logger.info("Confirming and Retrieving Google User Info...")
                        const accessToken = generateAccessToken({user: user.email})
                        user = {
                            ...user,
                            userID: results[0].userID,
                            accessToken
                        }
                        res.status(201)
                        res.json(user)
                    })
                } else {
                    connection.release()
                    logger.info("---------> Login Successful")
                    logger.info("---------> Generating accessToken")
                    const accessToken = generateAccessToken({user: user.email})   
                    logger.info(accessToken)
                    res.json({
                        ...user,
                        userID: result[0].userID,
                        accessToken
                    })
                }
            }) 
        })
        logger.info("Processing" + " " + name + ": " + email)
    }
}
