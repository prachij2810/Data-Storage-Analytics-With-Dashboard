    var mysql = require('mysql');
    var http = require("http");
    var app = require('./newapp');
    var bodyParser = require('body-parser');
    var express = require('express');
    var app1 = express();
    //var dom = require('express-dom');
    app1.use(bodyParser.urlencoded({extended: true}))
    app1.use(express.static('../Project_Node'))
    app1.set('view engine','pug');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'system',
        database : 'student'
    });
    connection.connect(function(err) {
        if (err) throw err
        console.log('You are now connected...')
    });
    var server = http.createServer(app1);
    server.listen(8080, "192.168.43.108", function () {
        var host = '192.168.43.108';
        var port = '8080';
        console.log("Example app listening at http://%s:%s", host, port)
      
    });
    app1.get("/", function(req, res) {
        res.sendFile(__dirname + "/newfront.htm");
        //res.render('index',{ title: 'Rohini '})  
    });
    // 
    app1.get("/types", function (req, res) {
        connection.query('select * from type', function (error, results, fields) {
           if (error) throw error;
           console.log(results);
           res.end(JSON.stringify(results));
           //res.render('index',{title:'Types Details',
            // items:"oshdj"})
        });
    });
    app1.post("/submit", function(req,res){
        //var db = dom.getElementById('district');
        console.log(req.body);
        //res.end(JSON.stringify(req.body));
        res.render('index',{title:'Data Saved',
        message:'Data Saved Successfully.'})
    });
    /*app.get('/', function (req, res) {
        connection.query('select * from type', function (error, results, fields) {
           if (error) throw error;
           res.end(JSON.stringify(results));
         });
    });*/