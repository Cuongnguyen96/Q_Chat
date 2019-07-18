var express = require("express");
var app = express();

var hostname = "localhost";
var port = 2211;

app.get("/QChat", (req, res) => {
    res.send("<h1> Q Chat </h1>");
});

app.listen(port, hostname, ()=>{
    console.log(`QK Chat, at ${hostname}:${port}/`);
});

// git status   Check On branch master Your branch is up to date with 'origin/master'.
// git checkout -b QK   Change branch Switched to a new branch 'QK'
// git branch   Check branch * QK master
// npm init     creating a package.json
// npm install --save express  created a lockfile as package-lock.json. You should commit this file. 
// node index.js
// git status
// git add .    add newfile
// git remote -v
    // origin  https://github.com/Cuongnguyen96/Q_Chat.git (fetch)
    // origin  https://github.com/Cuongnguyen96/Q_Chat.git (push)
// git push origin QK
    // Username for 'https://github.com': Cuongnguyen96
    // Password for 'https://Cuongnguyen96@github.com': nmc221130

// The sencond
// git status
// git add .
// git commit --amend
// git push origin QK -f