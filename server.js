var http = require("http");
var url = require("url");
var qs = require("querystring");
var fs = require("fs");
var path = require('path');
var express = require('express');
var functions = require('./sudoku_functions'); 
var dbFunctions = require('./db_functions'); 
const app = express();

app.use('/public', express.static(__dirname + '/public'));

app.listen(3000, function () {
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/sudoku.html');
});

app.get("/result", (req, res) => {
    console.log(req.query);
    
    if (functions.check_submit(req.query) == true) {
        //대충 db에 올리는 함수 매개변수 req.query hrs min sec name
        dbFunctions.add_record(req.query.hrs, req.query.min, req.query.sec, req.query.name);
        res.sendFile(__dirname + '/solved.html');
        
    } else {
        dbFunctions.add_record(req.query.hrs, req.query.min, req.query.sec, req.query.name);
        res.sendFile(__dirname + '/result2.html');
    };
    
    
});