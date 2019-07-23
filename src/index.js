//var express = require('express');
import express from "express";
import ConnectDB from "./config/connectDB";
import ContactModel from "./model/contact.model";

let app = express();

//Connection mongooseDB
ConnectDB();

//let hostname = "localhost";
//let port = 2211;

app.get("/qdb", async (req, res) => {
    try {
        let item ={
            userid: "123456789",
            contactid: "2211130",
        };
        let contact = await ContactModel.createNew(item);
        res.send(contact);
    } catch (err) {
        console.log(err);
    };
    //res.send("<h1> Q Chat </h1>");
});

app.listen(process.env.APP_PORT, process.env.APP_HOST, ()=>{
    console.log(`QK Chat, at ${process.env.APP_HOST}:${process.env.APP_PORT}\n`);
    //console.log(process.env.DB_CONNECTION);
});


