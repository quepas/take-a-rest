var express = require("express");
var app = express();

/* Handle main page */
app.get("/", function(req, res) {
  printReqSummary(req);
  res.send("<h2>Simple HTTP server</h2><p>Go to /hello subpage!</p>");
});

/* Handle `hello` subpage */
app.get("/hello", function(req, res) {
  printReqSummary(req);
  res.send("<h2>Special message</h2><p>Message for you: hello!</p>");
});

/* Start HTTP server at port 3000 (type in the browser: http://localhost:3000/) */
app.listen(3000);

/* Helper function - print request summary */
function printReqSummary(req) {
  console.log(`Handling ${req.method} ${req.originalUrl}`);
}
