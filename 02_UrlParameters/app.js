var express = require("express");
var app = express();

app.get("/", function(request, response) {
  printReqSummary(request);
  response.send(
    "<h2>URL Parameters (and Queries)</h2>" +
      "<p>Go to /hello/:name or /hello/:name/:surname?:age=0&:height=0 subpage!</p>"
  );
});

/* Handle named `hello` subpage */
app.get("/hello/:name", function(request, response) {
  printReqSummary(request);
  /* Grab URL parameters from `request.params` object */
  response.send(
    `<h2>A bit special message</h2><p>Message for: ${request.params.name}</p>`
  );
});

/* Handle `hello` subpage with full information */
app.get("/hello/:name/:surname", function(request, response) {
  printReqSummary(request);
  /* Grab URL queries from `request.query` object */
  var age = request.query.age !== null ? request.query.age : "unknown";
  var height = request.query.height !== null ? request.query.height : "unknown";
  response.send(
    "<h2>A very special message</h2>" +
      `<p>Message for: ${request.params.name} ${request.params.surname}` +
      ` (age: ${age}, height: ${height})</p>`
  );
});

var server = app.listen(3000);

function printReqSummary(request) {
  console.log(`Handling ${request.method} ${request.originalUrl}`);
}
