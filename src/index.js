//var express = require('express');
import express from "express";
import ConnectDB from "./config/connectDB";
//import ContactModel from "./model/contact.model";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web"
import bodyParser from "body-parser";
import connectFlash from "connect-flash";
import configSession from "./config/session";

// Init app
let app = express();

//Connection mongooseDB
ConnectDB();

// Congfig session
configSession(app);

// Congfig view engine
configViewEngine(app);

// Enable post data request
app.use(bodyParser.urlencoded({extended: true}));

// Enable classs messsage
app.use(connectFlash());

// Init all router
initRoutes(app);

//let hostname = "localhost";
//let port = 2211;




app.listen(process.env.APP_PORT, process.env.APP_HOST, ()=>{
    console.log(`QK Chat, at ${process.env.APP_HOST}:${process.env.APP_PORT}\n`);
    //console.log(process.env.DB_CONNECTION);
});


