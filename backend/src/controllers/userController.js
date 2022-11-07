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
        const search_query = mysql.format(sqlSearch, [userID])
        const sqlDelete = `DELETE FROM users WHERE userID = ?`
        const delete_query = mysql.format(sqlDelete, [userID])
  
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
      const password = req.body.password
      const wantsnotifications = req.body.wantsnotifications
    //var newuserID = req.body.newuserID // take out user id, can update wantsnotifications/prefs/
      var newusername = req.body.newusername //change password, encrypt new password, replace in table
      var newpassword = req.body.newpassword
      var newnotificationschoice = req.body.newnotificationschoice
      if (newusername == null) {
        newusername = username
      }
      if (newpassword == null) {
        passwordHash = await bcrypt.hash(password,10);
      } 
      else {
        passwordHash = await bcrypt.hash(newpassword,10);
      }
      if (newnotificationschoice == null) {
        newnotificationschoice = wantsnotifications
      }
      db.getConnection ( async (err, connection)=> {
        if (err) throw (err)
  
        const sqlSearch = `SELECT * FROM users 
                          WHERE userID = ? LIMIT 1` //when changing username search by userID
        const search_query = mysql.format(sqlSearch, [userID])
        const sqlUpdate = `UPDATE users SET username = ?, password = ?, wantsnotifications = ? 
                           WHERE userID = ?`
        const update_query = mysql.format(sqlUpdate, [newusername, passwordHash, newnotificationschoice, userID])
        
        await connection.query (search_query, async (err, result)=> {
          if (err) throw (err)
          if (result.length() == 0) {
            console.log("--------> Could not find user")
            res.sendStatus(400)
          }
          else {
            await connection.query (update_query, async (err, result)=> {
              if (err) throw (err)
              console.log("--------> Updated User")
              console.log(result.insertId)
              res.sendStatus(200) 
            })
          }
        })
      })
    }
  }
