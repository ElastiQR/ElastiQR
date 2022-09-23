require("dotenv").config()
const express = require("express");
var bodyParser = require('body-parser');

/* Import Routes */
const authRouter = require('./routes/authRoute');

/* Declare App */
const app = express();
app.use(express.json());
app.use(bodyParser.json());

/* Public Routes */
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/auth', authRouter)

/* Start Application */
const port = process.env.PORT;
app.listen(port, ()=> console.log(`Server Started on port ${port}...`));
