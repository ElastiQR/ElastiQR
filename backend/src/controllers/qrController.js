const mysql = require("mysql")
const db = require("../helpers/database")

module.exports = {
    createQRController: (req, res)=> {
      const qrname = req.body.name
      const qrURL = req.body.url 
      const description = req.body.description
      const userID = req.body.userID
  
      db.getConnection ( async (err, connection)=> {
        if (err) throw (err)
  
        const sqlSearch = `SELECT * FROM QRCodes 
                           where qrname = ? AND userID = ? LIMIT 1`
        const search_query = mysql.format(sqlSearch, [qrname, userID])
        const sqlInsert = `INSERT INTO QRCodes (qrID, qrname, qrURL, description, userID, created)
                           VALUES (NULL, ?, ?, ?, ?, CURRENT_TIMESTAMP())`
        const insert_query = mysql.format(sqlInsert, 
          [qrname, qrURL, description, userID])
  
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
      const userID = req.query.userID

      db.getConnection(async (err, connection) => {
        if (err) throw (err)

        const sqlSearch = 'SELECT * FROM QRCodes WHERE userID = ?'
        const search_query = mysql.format(sqlSearch, [userID])

        await connection.query(search_query, async (err, result)=> {
          if (err) throw (err)
          connection.release()

          if (result.length != 0) {
            const response = { "codes": result }
            res.send(JSON.stringify(response))

            console.log("--------> Requested QR Code has been found successfully")
          } else {
            console.log("--------> Error, could not find the requested QR Code")
            res.sendStatus(400)
          }
        })
      })
    }
  }
