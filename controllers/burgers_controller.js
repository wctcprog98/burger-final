var express = require("express");
var router = express.Router();
var burger = require("../models/burger"); 

router.get("/", function (req, res) {
    burger.selectAll(function (burgerInfo) {
        console.log(burgerInfo);
        res.render("index");
    })
   
});

module.exports = router; 