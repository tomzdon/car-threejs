var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname + '/main.css'));
});
app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname + '/lib/three.js'));
});

app.listen(8081);