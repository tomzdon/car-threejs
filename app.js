var express = require("express");
var app = express();
var path = require("path");
var http = require("http");

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/css", (req, res) => {
  res.sendFile(path.join(__dirname + "/main.css"));
});
app.get("/js", (req, res) => {
  res.sendFile(path.join(__dirname + "/lib/three.js"));
});
app.get("/terrain", (req, res) => {
  res.sendFile(path.join(__dirname + "/images/grasslight-big.jpg"));
});
app.get("/road", (req, res) => {
  res.sendFile(path.join(__dirname + "/images/road.jpg"));
});
app.use("/static", express.static("models"));
var httpServer = http.createServer(app);

httpServer.listen(8081);
