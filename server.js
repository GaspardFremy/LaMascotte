var express = require('express');
var app = express();
var server = require('http').createServer(app);

//Routes express
app.use('/static/css', express.static(__dirname + '/public/css'));
app.use('/static/js', express.static(__dirname + '/public/js'));
app.use('/static/img', express.static(__dirname + '/public/img'));
app.use('/static/font', express.static(__dirname + '/public/font'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/carte', function(req, res){
    res.sendFile(__dirname + '/views/carte.html');
});

app.get('/ecaille', function(req, res){
    res.sendFile(__dirname + '/views/ecaille.html');
});

server.listen(1337);
console.log('listenning on port:1337');
