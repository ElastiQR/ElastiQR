const mysql = require('mysql');

// Currently configured for a development environment.

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;

// const INSTANCE_CONNECTION_NAME = process.env.INSTANCE_CONNECTION_NAME;

const db = mysql.createPool({
  connectionLimit: 5,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  // socketPath: `/cloudsql/${INSTANCE_CONNECTION_NAME}`,
});

db.getConnection( (err, connection)=> {
  if (err) throw (err);
  console.log ("DB connected successful: " + connection.threadId);
});

module.exports = db;
