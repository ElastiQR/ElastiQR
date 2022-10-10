const { Router } = require('express')

//new module export for get request named codes
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
    } /*,

    codes: (req, res)=> {
      var express = require('express');  
      var app = express();  
      app.use(express.static('public'));  

      app.get('/getQRCodes', function (req, res) {  
        response = {  
          qr_name:req.query.qrname,   
        };  
        console.log(response);  
        res.end(JSON.stringify(response));  
      })   
    }*/
  }