/* Import Express web framework */
var express = require("express");
/* Create main app */
var app = express();

/* Handle main page */
app.get("/", function(request, response) {
  printReqSummary(request);
  /* Send response to a request (here as a HTML markup) */
  response.send("<h2>HTTP Server</h2><p>Go to /hello subpage!</p>");
});

/* Handle `hello` subpage */
app.get("/hello", function(request, response) {
  printReqSummary(request);
  response.send("<p>Anonymous message: Oh, Hi Mark!</p>");
});

/* Start HTTP server at port 3000 (type in the browser: http://localhost:3000/) */
app.listen(3000);

/* Helper function - print request summary */
function printReqSummary(request) {
  /* Display handled HTTP method and link (path + queries) */
  console.log(`Handling ${request.method} ${request.originalUrl}`);
}
