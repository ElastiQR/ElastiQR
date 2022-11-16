const mysql = require("mysql")
const db = require("../helpers/database")
const logger = require("../helpers/logger")

module.exports = {
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
          } else {
            logger.info("--------> Updated QR Code")
            res.sendStatus(200);
          }
        }) 
      })
    }
  }
