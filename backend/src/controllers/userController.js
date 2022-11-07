const mysql = require("mysql")
const db = require("../helpers/database")

module.exports = {
    deleteUserController: (req, res)=> {
  
      const userID = req.body.userID
      const username = req.body.username
  
      db.getConnection ( async (err, connection)=> {
        if (err) throw (err)
  
        const sqlSearch = `SELECT * FROM users 
                           WHERE userID = ?`
        const search_query = mysql.format(sqlSearch, [username])
        const sqlDelete = `DELETE FROM users WHERE username = ?`
        const delete_query = mysql.format(sqlDelete, [username])
  
        await connection.query (search_query, async (err, result)=> {
          if (err) throw (err)
          console.log("--------> Search Results")
          console.log(result.length)
          if (result.length == 0) {
            console.log("--------> User not found")
            res.sendStatus(409)
          } else {
              await connection.query (delete_query, (err, result)=> {
                connection.release()
                if (err) throw (err)
                console.log("--------> Successfully deleted User")
                res.sendStatus(200)             
              })          
          }
        })
      })
    },
    updateUserController: async (req, res)=> {

      const userID = req.body.userID
      const username = req.body.username

    //var newuserID = req.body.newuserID // take out user id, can update wantsnotifications/prefs/
      var newusername = req.body.newusername //change password, encrypt new password, replace in table
      var newpassword = req.body.newpassword
      var isnewpassword = 1
      var passwordHash = ""
    
      if (newusername == null) {
        newusername = username
      }
      if (newpassword == null) {
        isnewpassword = 0
      }
      if (isnewpassword == 1) {
        passwordHash = await bcrypt.hash(req.body.password,10);
      }

      db.getConnection ( async (err, connection)=> {
        if (err) throw (err)
  
       // const sqlSearch = `SELECT * FROM users 
       //                  WHERE userID = ? LIMIT 1` //when changing username search by userID
       // const search_query = mysql.format(sqlSearch, [userID])
        const sqlUpdate = `UPDATE users SET username = ? 
                           WHERE userID = ?`
        const update_query = mysql.format(sqlUpdate, [newusername, userID])

        //const pwSearch = "SELECT * FROM users WHERE userID = ? LIMIT 1"
        //const pwsearch_query = mysql.format(sqlSearch,[userID])
        const pwUpdate = 'UPDATE users SET password = ? WHERE userID = ?'
        const pwupdate_query = mysql.format(pwUpdate, [passwordHash, userID])
  
        /*const qrsqlSearch = 'SELECT * FROM QRCodes WHERE userID = ?'
        const sqlUpdateuserID = `UPDATE QRCodes SET userID = ? 
        WHERE userID = ?`
        const update_queryuserID = mysql.format(sqlUpdateuserID, [newuserID, userID])
        */
        await connection.query (update_query, async (err, result)=> {
          if (err) throw (err)
          console.log("--------> Updated Username")
          console.log(result.insertId)
          //res.sendStatus(201) 
        })
        if (isnewpassword == 1) {
          await connection.query (pwupdate_query, async (err, result)=> {
            if (err) throw (err)
            console.log("--------> Updated Username")
            console.log(result.insertId)
            //res.sendStatus(201) 
          })
        }
        res.sendStatus(200) 
      })
    }
  }
