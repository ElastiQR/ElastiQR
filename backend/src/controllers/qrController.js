const mysql = require("mysql")
const db = require("../helpers/database")
const logger = require("../helpers/logger")

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
          logger.info("--------> Search Results")
          logger.info(result.length)
          if (result.length != 0) {
            logger.error("--------> QR Code already exists")
            res.sendStatus(409)
          } else {
              await connection.query (insert_query, (err, result)=> {
                connection.release()
                if (err) throw (err)
                logger.info("--------> Created new QR Code")
                logger.info(result.insertId)
                res.sendStatus(201)
              })
          }
        })
      })
    },
    retrieveQRController: (req,res)=> {
      const userID = req.query.userID
      const resultslimit = parseInt(req.query.resultslimit)
      var islimit
      var sqlSearch
      var search_query

      db.getConnection(async (err, connection) => {
        if (err) throw (err)

        if (!resultslimit) {
          sqlSearch = 'SELECT * FROM QRCodes WHERE userID = ?'
          islimit = 0
        }
        else {
          sqlSearch = 'SELECT * FROM QRCodes WHERE userID = ? LIMIT ?'
          islimit = 1
        }
        if (islimit == 0) {
          search_query = mysql.format(sqlSearch, [userID])
        }
        if (islimit == 1) {
          search_query = mysql.format(sqlSearch, [userID, resultslimit])
        }

        await connection.query(search_query, async (err, result)=> {
          if (err) throw (err)
          connection.release()

          if (result.length != 0) {
            const response = { "codes": result }
            res.send(JSON.stringify(response))

            logger.info("--------> Requested QR Codes have been found successfully")
          } else {
            logger.error("--------> Error, could not find the requested QR Codes")
            res.sendStatus(400)
          }
        })
      })
    },
    redirectQRController: (req,res)=> {
      const qrID = req.query.qrID;
      logger.info("QR ID: " + qrID);

      db.getConnection(async (err, connection) => {
        if (err) throw (err)
        sqlSearch = 'SELECT * FROM QRCodes WHERE qrID = ? LIMIT 1'
        search_query = mysql.format(sqlSearch, [qrID])
        const sqlInsert = `INSERT INTO QRScans (qrID, accessTime)
                           VALUES (?, CURRENT_TIMESTAMP())`
        const insert_query = mysql.format(sqlInsert, [qrID]);

        await connection.query(search_query, async (err, result)=> {
          if (err) throw (err)

          if (result.length != 0) {
            logger.info("--------> Requested QR Code has been found successfully")

            await connection.query(insert_query, async (err, result)=> {
              if (err) throw (err)
              connection.release()
              logger.info("--------> Scan logged successfully" + result.insertId)
            })
            res.redirect(result[0].qrURL);
          } else {
            connection.release()
            logger.error("--------> Error, could not find the requested QR Code")
            res.sendStatus(400)
          }
        });
      });
    },
    countQRScansController: (req, res) => {
      const qrID = parseInt(req.query.qrID);
      const daySpan = parseInt(req.query.span);

      db.getConnection(async (err, connection) => {
        if (err) throw (err)
        sqlSearch = `SELECT COUNT(*) AS quantity FROM QRScans WHERE qrID = ? AND 
                     accessTime >= DATE_SUB(CURDATE(), INTERVAL ? day)`
        search_query = mysql.format(sqlSearch, [qrID, daySpan])

        await connection.query(search_query, async (err, result) => {
          if (err) throw (err)
          connection.release()
          
          const response = {
            quantity: result[0].quantity
          }
          res.send(JSON.stringify(response))
        })
      })
    }
  }
