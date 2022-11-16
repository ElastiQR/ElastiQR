require("dotenv").config()
const express = require("express");
var bodyParser = require('body-parser')
const db = require("./helpers/database")
var cors = require('cors');
const validateLinksService = require ("./services/qrService")

require('dotenv').config({ path: require('find-config')('.env') })

/* Import Routes */
const authRouter = require('./routes/authRoute')
const updateRouter = require('./routes/updateRoute')
const qrRouter = require('./routes/qrRoute')

/* Declare App */
const app = express();
app.use(express.json())
app.use(bodyParser.json());
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* Start Background Services */
validateLinksService.start();

/* Public Routes */
app.use('/qr', qrRouter)
app.use('/auth', authRouter)
app.use('/update', updateRouter)

/* Start Application */
const port = 3000;
app.listen(port, ()=> console.log(`Server Started on port ${port}...`))

db.getConnection( (err, connection)=> {
  if (err) throw (err)
  console.log ("DB connected successful: " + connection.threadId)
})
