const express = require("express");
const app = express();
require("dotenv").config();
const cookie = require("cookie-parser");
const mongoose = require("mongoose");
const expressValidator = require("express-validator");

//var bodyParser = require('body-parser')
//import routes
const authRoute = require("./router/auth");
const userRouter = require("./router/users");

app.use(express.json());
app.use(cookie());
app.use(expressValidator());
//routes
app.use("/api", authRoute);
app.use("/user", userRouter);

//middlware

//bodyParser.json()

//connection with database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("data base connected"))
  .catch(() => console.log("database not connected"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("port run in port", port));
