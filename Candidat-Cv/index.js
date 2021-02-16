const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const expressValidator = require("express-validator");

app.use(express.json());
app.use(expressValidator());
//import routers
const candidatRouter = require("./router/candidats");
const cvRouter = require("./router/cvs");

//user router
app.use("/candidat", candidatRouter);
app.use("/cv", cvRouter);

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("data base connected"))
  .catch(() => console.log("database not connected"));

const port = process.env.PORT || 6000;
app.listen(port, () => console.log("port run in port", port));
