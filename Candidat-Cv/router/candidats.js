const express = require("express");
const Candidatrouter = express.Router();
const { addCandidat } = require("../Controller/candiadtController");
const { candidatValidator } = require("../middlware/candidatValidator");
Candidatrouter.post("/add", [candidatValidator], addCandidat);

module.exports = Candidatrouter;
