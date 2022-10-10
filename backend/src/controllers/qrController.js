const mysql = require("mysql")
const db = require("../helpers/database")

module.exports = {
    createQRController: (req, res)=> {
      const qrname = req.body.name
      const qrURL = req.body.url 
      const userID = req.body.userID
  
      db.getConnection ( async (err, connection)=> {
        if (err) throw (err)
  
        const sqlSearch = `SELECT * FROM QRCodes 
                           where qrname = ? AND userID = ? LIMIT 1`
        const search_query = mysql.format(sqlSearch, [qrname, userID])
        const sqlInsert = `INSERT INTO QRCodes (qrID, qrname, qrURL, userID)
                           VALUES (NULL, ?, ?, ?)`
        const insert_query = mysql.format(sqlInsert, [qrname, qrURL, userID])
  
        await connection.query (search_query, async (err, result)=> {
          if (err) throw (err)
          console.log("--------> Search Results")
          console.log(result.length)
          if (result.length != 0) {
            console.log("--------> QR Code already exists")
            res.sendStatus(409)
          } else {
              await connection.query (insert_query, (err, result)=> {
                connection.release()
                if (err) throw (err)
                console.log("--------> Created new QR Code")
                console.log(result.insertId)
                res.sendStatus(201)
              })
          }
        })
      })
    },
    retrieveQRController: (req,res)=> {
      const qrname = req.query.name

      db.getConnection(async (err, connection) => {
        if (err) throw (err)

        const sqlSearch = 'SELECT * FROM QRCodes WHERE qrname = ? LIMIT 1'
        const search_query = mysql.format(sqlSearch, [qrname])

        await connection.query(search_query, async (err, result)=> {
          if (err) throw (err)
          connection.release()

          if (result.length != 0) {
            const response = {
              id:result[0].qrID,
              name:result[0].qrname,
              url:result[0].qrURL,
              userID:result[0].userID
            }
            res.end(JSON.stringify(response))
            // Send HTTP status 200 and indicate success
          } else {
            // Couldn't find the requested qr code, http status 400
          }
        })
      })
    }
  }
