const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const expressValidator = require("express-validator");

// imports routes
const recruteurRoute = require("./routes/Recruteurs");
const offreRoute = require("./routes/Offres");

app.use(express.json());
app.use(expressValidator());

app.use("/api/recruteur", recruteurRoute);
app.use("/api/offre", offreRoute);
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("data base connected"))
  .catch(() => console.log("database not connected"));

const port = process.env.PORT || 5001;
app.listen(port, () => console.log("port run in port", port));
