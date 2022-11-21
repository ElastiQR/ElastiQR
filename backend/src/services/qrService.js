const mysql = require("mysql")
const db = require("../helpers/database")
const cron = require("node-cron");
const isReachable = require('is-reachable');

function getQRs(connection, callback) {
    sqlSearch = `SELECT * FROM QRCodes`
    search_query = mysql.format(sqlSearch)

    connection.query(search_query, async (err, result) => {
        if (err) throw (err)
        connection.release()    

        callback(null,result);
    });
}

function setQRValid(qrID, reachable, connection, url) {
    const sqlUpdate = `UPDATE QRCodes SET validLink = ? WHERE qrID = ?`;
    const update_query = mysql.format(sqlUpdate, [reachable, qrID]);
    connection.query (update_query);
}

validateLinksService = cron.schedule("*/2 * * * *", function () {
    console.log("---------------------");
    console.log("NODE-CRON: validating all QR links");
    console.log("---------------------");

    db.getConnection(async (err, connection) => {
        if (err) throw (err)

        getQRs(connection, async function(err,qrs) {
            console.log(qrs);

            for(let i = 0; i < qrs.length; i++) {
                var qrID = qrs[i]['qrID'];
                var validLink = qrs[i]['validLink'];
                var url = qrs[i]['qrURL'];
                var reachable = await isReachable(url);

                if(reachable != validLink) {
                    setQRValid(qrID, reachable, connection, url);
                }
            }
        });

    })
});

module.exports = validateLinksService;
