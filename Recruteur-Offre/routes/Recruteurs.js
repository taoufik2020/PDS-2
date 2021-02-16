const express = require("express");
const recruteurRoute = express.Router();
const { addRecruteur } = require("../Controller/RecruteurController");
const { recruteurValidator } = require("../middlware/RecruteurValidator");
recruteurRoute.post("/add", [recruteurValidator], addRecruteur);

module.exports = recruteurRoute;
