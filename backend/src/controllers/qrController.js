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
            res.status(301).redirect(result[0].qrURL);
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
        const sqlSearch = `SELECT COUNT(*) AS quantity FROM QRScans WHERE qrID = ? AND 
                           accessTime >= DATE_SUB(CURDATE(), INTERVAL ? day)`
        const search_query = mysql.format(sqlSearch, [qrID, daySpan])

        await connection.query(search_query, async (err, result) => {
          if (err) throw (err)
          connection.release()
          
          const response = {
            quantity: result[0].quantity
          }
          res.send(JSON.stringify(response));
        })
      })
    },
    recentActivityController: (req, res) => {
      const userID = parseInt(req.query.userID)

      db.getConnection(async (err, connection) => {
        if (err) throw (err)
        
        const sqlSearch = "SELECT * FROM users WHERE userID = ? LIMIT 1"
        const search_query = mysql.format(sqlSearch, [userID])

        await connection.query(search_query, async (err, result) => {
          if (err) throw (err)

          if (result.length == 0) {
            logger.error("User attempting to access recent activity without valid ID.")
          } else {
            logger.info("-------> Found user")

            const sqlFindActivity = `SELECT 
              SUM(CASE
                WHEN accessTime > DATE_SUB(current_timestamp(), INTERVAL 1 day)
                THEN 1 ELSE 0
                END) AS first,
              SUM(CASE
                WHEN accessTime > DATE_SUB(current_timestamp(), INTERVAL 2 day)
                THEN 1 ELSE 0
                END) AS second,
              SUM(CASE
                WHEN accessTime > DATE_SUB(current_timestamp(), INTERVAL 3 day)
                THEN 1 ELSE 0
                END) AS third,
              SUM(CASE
                WHEN accessTime > DATE_SUB(current_timestamp(), INTERVAL 4 day)
                THEN 1 ELSE 0
                END) AS fourth,
              SUM(CASE
                WHEN accessTime > DATE_SUB(current_timestamp(), INTERVAL 5 day)
                THEN 1 ELSE 0
                END) AS fifth
              FROM QRScans
              WHERE qrID IN (SELECT qrID FROM QRCodes WHERE userID = ?)`
            const sum_query = mysql.format(sqlFindActivity, [userID]);

            connection.query(sum_query, async (err, result) => {
              if (err) throw (err)
              connection.release();

              logger.info("Responding to recent activity request.")
              res.send(JSON.stringify({
                activity: Object.values(result[0])
              }))
            })
          }
        })
      })
    },

    deleteQRController: (req, res)=> {
      const qrname = req.body.name
      const userID = req.body.userID
  
      db.getConnection ( async (err, connection)=> {
        if (err) throw (err)
  
        const sqlSearch = `SELECT * FROM QRCodes 
                           where qrname = ? AND userID = ? LIMIT 1`
        const search_query = mysql.format(sqlSearch, [qrname, userID])
        const sqlDelete = `DELETE FROM QRCodes WHERE qrname = ? AND userID = ?`
        const delete_query = mysql.format(sqlDelete, [qrname, userID])
  
        await connection.query (search_query, async (err, result)=> {
          if (err) throw (err)

          logger.info("--------> Search Results")
          logger.info(result.length)
          if (result.length == 0) {
            logger.info("--------> QR Code does not exist")
            res.sendStatus(409)
          } else {
              await connection.query (delete_query, (err, result)=> {
                connection.release()
                if (err) throw (err)
                logger.info("--------> Deleted QR Code")
                res.sendStatus(200) 
              })
          }
        }) 
      })
    },

    updateQRController: (req, res)=> {
      const qrname = req.body.name
      const qrURL = req.body.url 
      const description = req.body.description
      const qrID = req.body.qrID

      db.getConnection ( async (err, connection)=> {
        if (err) throw (err)
  
        const sqlUpdate = `UPDATE QRCodes SET qrname = ?, qrURL = ?, description = ?  
                           WHERE qrID = ?`
        const update_query = mysql.format(sqlUpdate, [qrname, qrURL, description, qrID])

        await connection.query (update_query, async (err, result)=> {
          if (err) throw (err)
          connection.release();

          if (!result.affectedRows) {
            logger.error("-------> Couldn't find the requested QR code")
            res.sendStatus(400);
          } 
          else {
            logger.info("--------> Updated QR Code")
            res.sendStatus(200);
          }
        }) 
      })
    }
  }
