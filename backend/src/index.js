require("dotenv").config()
const express = require("express");
var bodyParser = require('body-parser')
const db = require("./helpers/database")

require('dotenv').config({ path: require('find-config')('.env') })

/* Import Routes */
const authRouter = require('./routes/authRoute')

/* Declare App */
const app = express();
app.use(express.json())
app.use(bodyParser.json());

/* Public Routes */
app.get("/", (req, res) => {
  res.send("Backend Running!");
});

app.use('/auth', authRouter)

/* Start Application */
const port = 3000;
app.listen(port, ()=> console.log(`Server Started on port ${port}...`))

db.getConnection( (err, connection)=> {
  if (err) throw (err)
  console.log ("DB connected successful: " + connection.threadId)
})
