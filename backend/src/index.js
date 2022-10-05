require("dotenv").config()
<<<<<<< HEAD
const mysql = require("mysql")
=======
>>>>>>> main
const express = require("express");
var bodyParser = require('body-parser')

/* Import Routes */
const authRouter = require('./routes/authRoute')

/* Declare App */
const app = express();
app.use(express.json())
app.use(bodyParser.json());

<<<<<<< HEAD
/* Create Database */
const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE = process.env.DB_DATABASE
const DB_PORT = process.env.DB_PORT

const db = mysql.createPool({
  connectionLimit: 100,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT
})

db.getConnection( (err, connection)=> {
  if (err) throw (err)
  console.log ("DB connected successful: " + connection.threadId)
})

=======
>>>>>>> main
/* Public Routes */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/auth', authRouter)

<<<<<<< HEAD

/* Start Application */
const port = process.env.PORT
app.listen(port, ()=> console.log(`Server Started on port ${port}...`))

=======
/* Start Application */
const port = process.env.PORT
app.listen(port, ()=> console.log(`Server Started on port ${port}...`))
>>>>>>> main
