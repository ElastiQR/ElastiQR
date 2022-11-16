const mysql = require("mysql")
const db = require("../helpers/database")
const cron = require("node-cron");
const isReachable = require('is-reachable');


validateLinksService = cron.schedule("*/60 * * * * *", function () {
    console.log("---------------------");
    console.log("NODE-CRON: validating all QR links...");
    console.log("---------------------");

    db.getConnection(async (err, connection) => {
        if (err) throw (err)
        sqlSearch = `SELECT * FROM QRCodes`
        search_query = mysql.format(sqlSearch)

        await connection.query(search_query, async (err, result) => {
            if (err) throw (err)
            connection.release()
        
            for(let i = 0; i < result.length; i++) {
                var qrID = result[i]['qrID'];
                var validLink = result[i]['validLink'];
                var url = result[i]['qrURL'];
                var reachable = await isReachable(url);
                
                if(reachable != validLink) {
                    const sqlUpdate = `UPDATE QRCodes SET validLink = ? WHERE qrID = ?`
                    const update_query = mysql.format(sqlUpdate, [reachable, qrID])

                    await connection.query (update_query) 
                }
            }
        })
    })
});

module.exports = validateLinksService;
