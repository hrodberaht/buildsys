var express = require("express");

var router = express.Router();

var test = require("../controllers/testController");

router.get("/", test );


module.exports =router;