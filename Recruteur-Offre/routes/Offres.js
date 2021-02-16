const express = require("express");
const offreRoute = express.Router();
const { addOffre } = require("../Controller/OffreController");

offreRoute.post("/add", addOffre);

module.exports = offreRoute;
