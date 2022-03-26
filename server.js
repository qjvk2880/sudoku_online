var http = require("http");
var url = require("url");
var qs = require("querystring");
var fs = require("fs");
var path = require('path');
var express = require('express');
var functions = require('./functions');
const app = express();

app.use('/public', express.static(__dirname + '/public'));

app.listen(3000, function () {
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/sudoku.html');
});

app.get("/result", (req, res) => {
   
    
    if (functions.check_submit(req.query) == true) {
        res.sendFile(__dirname + '/result.html');
    } else {
        res.sendFile(__dirname + '/result2.html');
    };
    
    
});