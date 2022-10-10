const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')
const mysql = require("mysql")
const db = require("../helpers/database")

function generateAccessToken (user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15m"})
}

module.exports = {
    createUserController: async (req,res) => {
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
        
            console.log("------> Search Results")
            console.log(result.length)
        
            if (result.length != 0) {
                connection.release()
                console.log("------> User already exists")
                res.sendStatus(409) 
            } else {
                await connection.query (insert_query, (err, result)=> {
                connection.release()
                if (err) throw (err)
                    console.log ("--------> Created new User")
                    console.log(result.insertId)
                    res.sendStatus(201)
                })
            }
            }) 
        
        }) 
    },

    loginUserController: (req, res)=> {
        const user = req.body.name
        const password = req.body.password

        db.getConnection ( async (err, connection)=> {
            if (err) throw (err)

            const sqlSearch = "SELECT * FROM users WHERE username = ? LIMIT 1"
            const search_query = mysql.format(sqlSearch,[user])

            await connection.query (search_query, async (err, result) => {
                connection.release()
                
                if (err) throw (err)
                if (result.length == 0) {
                console.log("--------> User does not exist")
                res.sendStatus(404)
                } 
                else {
                    const hashedPassword = result[0].password
                
                    if (await bcrypt.compare(password, hashedPassword)) {
                        console.log("---------> Login Successful")
                        console.log("---------> Generating accessToken")
                        const token = generateAccessToken({user: user})   
                        console.log(token)
                        res.json({accessToken: token})
                    } else {
                        res.send("Password incorrect!")
                    } 
                }
            }) 
        }) 
    }
}
