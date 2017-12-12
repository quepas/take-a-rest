var express = require("express");
var app = express();

app.get("/", function(req, res) {
  printRequest(req);
  res.send("<h2>Simple HTTP server</h2><p>Go to /hello subpage!</p>");
});

app.get("/hello", function(req, res) {
  printRequest(req);
  res.send("<h2>Special message</h2><p>Message for you: hello!</p>");
});

function printRequest(req) {
  console.log(`Handling ${req.method} ${req.originalUrl}`);
}

var server = app.listen(3000);
