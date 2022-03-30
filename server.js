var http = require("http");
var url = require("url");
var qs = require("querystring");
var fs = require("fs");
var path = require("path");
var express = require("express");
var functions = require("./sudoku_functions");
var dbFunctions = require("./public/db_functions");
const db = require("./db");
const { send } = require("express/lib/response");
const app = express();

app.use("/public", express.static(__dirname + "/public"));

app.listen(3000, function () {});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/sudoku.html");
});

app.get("/result", (req, res) => {
  dbFunctions.add_record(
    req.query.hrs,
    req.query.min,
    req.query.sec,
    req.query.name
    );
    dbFunctions.get_ranking(function (ranking) {
        var listHTML = "";
        var length = (ranking.length < 10) ?  ranking.length : 10 ;
        for (var i = 0; i < length; i++){
            listHTML+=`<li>${ranking[i].name} : ${ranking[i].time}</li>`
        }
        res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>solved</title>

        </head>
        <body>
            <h1>문제 해결 성공!</h1>
            <ol class="ranking">
                ${listHTML}
            </ol>



        </body>
        </html>
        `);
    });
    
  // if (functions.check_submit(req.query) == true) {
  //     //대충 db에 올리는 함수 매개변수 req.query hrs min sec name

  // } else {

  //     res.sendFile(__dirname + '/failed.html');
  // };
});
