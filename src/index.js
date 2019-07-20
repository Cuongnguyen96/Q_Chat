//var express = require('express');
import express from "express";
let app = express();

let hostname = "localhost";
let port = 2211;

app.get("/qchat", (req, res) => {
    res.send("<h1> Q Chat </h1>");
});

app.listen(port, hostname, ()=>{
    console.log(`QK Chat, at ${hostname}:${port}/`);
});


