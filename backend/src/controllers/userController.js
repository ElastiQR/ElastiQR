const mysql = require("mysql")
const db = require("../helpers/database")

module.exports = {
    deleteUserController: (req, res)=> {
//      const qrname = req.body.name
//      const qrURL = req.body.url 
//      const description = req.body.description
      const userID = req.body.userID
      const username = req.body.username
  
      db.getConnection ( async (err, connection)=> {
        if (err) throw (err)
  
        const sqlSearch = `SELECT * FROM users 
                           WHERE username = ?` //should use userID
        const search_query = mysql.format(sqlSearch, [username])
        const sqlDelete = `DELETE FROM users WHERE username = ?`
        const delete_query = mysql.format(sqlDelete, [username])

        const qrsqlSearch = `SELECT * FROM QRCodes 
                             WHERE userID = ?`
        const qrsearch_query = mysql.format(qrsqlSearch, [userID])
        const qrsqlDelete = `DELETE FROM QRCodes WHERE userID = ?`
        const qrdelete_query = mysql.format(qrsqlDelete, [userID])
        var codesfound = 1
  
        await connection.query (search_query, async (err, result)=> {
          if (err) throw (err)
          console.log("--------> Search Results")
          console.log(result.length)
          if (result.length == 0) {
            console.log("--------> User not found")
            res.sendStatus(409)
          } else {
              await connection.query (delete_query, (err, result)=> {
               // connection.release()
                if (err) throw (err)
                console.log("--------> Successfully deleted User")
                //console.log(result.insertId)                
              })
            //delete deleted user's QR CODES
              await connection.query (qrsearch_query, (err, result)=> {
                if (err) throw (err)
                console.log("--------> User's QR codes to be deleted")
                console.log(result.length)
                if (result.length == 0) {
                    res.sendStatus(200)
                    codesfound = 0
                } 
              })
              if (codesfound == 1) {  
                await connection.query (qrdelete_query, (err, result)=> {
                    if (err) throw (err)
                    connection.release
                    if (err) throw (err)
                    console.log("--------> Deleted QR Codes of Deleted User")
                    res.sendStatus(200)
                })
              }            
          }
        })
      })
    },
    updateUserController: (req, res)=> {

      const userID = req.body.userID
      const username = req.body.username

      var newuserID = req.body.newuserID // take out user id, can update wantsnotifications/prefs/
      var newusername = req.body.newusername //change password, encrypt new password, replace in table
     
      if (newusername == null) {
        newusername = username
      }
      if (newuserID == null) {
        newuserID = userID
      }

      db.getConnection ( async (err, connection)=> {
        if (err) throw (err)
  
        const sqlSearch = `SELECT * FROM users 
                           WHERE username = ? LIMIT 1` //when changing username search by userID
        const search_query = mysql.format(sqlSearch, [username])
        const sqlUpdate = `UPDATE users SET username = ? 
                           WHERE username = ?`
        const update_query = mysql.format(sqlUpdate, [newusername, username])
  
        const qrsqlSearch = 'SELECT * FROM QRCodes WHERE userID = ?'
        const sqlUpdateuserID = `UPDATE QRCodes SET userID = ? 
        WHERE userID = ?`
        const update_queryuserID = mysql.format(sqlUpdateuserID, [newuserID, userID])

        await connection.query (update_query, async (err, result)=> {
          if (err) throw (err)
          console.log("--------> Updated Username")
          //console.log(result.insertId)
           //res.sendStatus(201) 
        }) 

        await connection.query (update_queryuserID, async (err, result)=> {
          if (err) throw (err)
          connection.release()
          if (err) throw (err)
          console.log("--------> Updated QR Codes to new UserID")
          //console.log(result.insertId)
        })
        res.sendStatus(200) 
      })
    }
  }
