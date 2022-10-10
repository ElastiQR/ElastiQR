const { Router } = require('express')


module.exports = {
    createQRController: (req, res)=> {
      const qrname = req.body.name
  
      db.getConnection ( async (err, connection)=> {
        if (err) throw (err)
  
        const sqlSearch = "Select * from QRTable where qrname = ?"
        const search_query = mysql.format(sqlSearch, [qrname])
        const sqlInsert = "INSERT INTO QRTable VALUES (?)"
        const insert_query = mysql.format(sqlInsert, [qrname])
  
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
      response = {
        qr_name:req.query.name
      }
      console.log(response)
      res.end(JSON.stringify(response))
    }
  }