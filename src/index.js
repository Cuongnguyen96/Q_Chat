//var express = require('express');
import express from "express";
import ConnectDB from "./config/connectDB";
//import ContactModel from "./model/contact.model";
import configViewEngine from "./config/viewEngine";

// Init app
let app = express();

//Connection mongooseDB
ConnectDB();

// Congfig view engine
configViewEngine(app);

//let hostname = "localhost";
//let port = 2211;

app.get("/",  (req, res) => {
    return res.render("main/master");
});

app.get("/login-register",  (req, res) => {
    return res.render("auth/loginRegister");
});


app.listen(process.env.APP_PORT, process.env.APP_HOST, ()=>{
    console.log(`QK Chat, at ${process.env.APP_HOST}:${process.env.APP_PORT}\n`);
    //console.log(process.env.DB_CONNECTION);
});


