var express = require("express");
var app = express();

app.get("/", function(request, response) {
  printReqSummary(request);
  response.send(
    "<h2>URL Parameters (and Queries)</h2><ul>" +
      "<li>Show normal message (GET /hello/:name)</li>" +
      "<li>Show special message (GET /hello/:name/:surname?age=NUMBER&height=NUMBER)</li></ul>"
  );
});

/* Handle named `hello` subpage */
app.get("/hello/:name", function(request, response) {
  printReqSummary(request);
  /* Grab URL parameters from `request.params` object */
  response.send(`<p>Normal message for: ${request.params.name}</p>`);
});

/* Handle `hello` subpage with full information */
app.get("/hello/:name/:surname", function(request, response) {
  printReqSummary(request);
  /* Grab (optional) URL queries from `request.query` object */
  var age = request.query.age !== null ? request.query.age : "unknown";
  var height = request.query.height !== null ? request.query.height : "unknown";
  response.send(
    `<p>Special message for: ${request.params.name} ${request.params.surname}` +
      ` (age: ${age} years, height: ${height} cm)</p>`
  );
});

app.listen(3000);

function printReqSummary(request) {
  console.log(`Handling ${request.method} ${request.originalUrl}`);
}
