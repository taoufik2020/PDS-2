const express = require("express");
const { createCv } = require("../Controller/cvController");
const cvRouter = express.Router();

cvRouter.post("/add", createCv);

module.exports = cvRouter;
