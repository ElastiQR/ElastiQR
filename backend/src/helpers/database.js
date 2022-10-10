const mysql = require('mysql');

// Currently configured for a development environment.

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;

console.log("HOST: " + DB_HOST )
// const INSTANCE_CONNECTION_NAME = process.env.INSTANCE_CONNECTION_NAME;

const db = mysql.createPool({
  connectionLimit: 100,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: "3306",
  // socketPath: `/cloudsql/${INSTANCE_CONNECTION_NAME}`,
});

module.exports = db;
