"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); //var express = require("express");


var hostname = "localhost";
var port = 2211;

app.get("/q_chat", function (req, res) {
    res.send("<h1> Q Chat </h1>");
});

app.listen(port, hostname, function () {
    console.log("QK Chat, at " + hostname + ":" + port + "/");
});
