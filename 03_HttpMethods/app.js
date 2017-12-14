var express = require("express");
var app = express();

/* Store items collection in this array */
let items = [];

app.get("/", function(request, response) {
  printReqSummary(request);
  response.send(
    "<h2>HTTP Methods</h2><ul>" +
      "<li>Show items (GET /item)</li>" +
      "<li>Add an item (PUT /item/:name)</li>" +
      "<li>Remove an item (DELETE /item/:name)</li></ul>"
  );
});

/* GET /item -- Show all items from the collection */
app.get("/item", function(request, response) {
  printReqSummary(request);
  response.send(`<p>Available items: ${items.toString()}</p>`);
});

/* PUT /item/:name -- add (put) new item to the collection */
app.put("/item/:name", function(request, response) {
  printReqSummary(request);
  let itemName = request.params.name;
  /* Check if the item is in the collection */
  if (items.includes(itemName)) {
    response.send(`<p>Item "${itemName}" already in collection</p>`);
  } else {
    items.push(itemName);
    response.send(`<p>Item "${itemName}" added successfully</p>`);
  }
});

/* DELETE /item/:name -- remove a given item from the collection */
app.delete("/item/:name", function(request, response) {
  printReqSummary(request);
  let itemName = request.params.name;
  /* Check if the item is in the collection */
  if (items.includes(itemName)) {
    items = items.filter(item => item !== itemName);
    response.send(`<p>Item "${itemName}" removed successfully</p>`);
  } else {
    response.send(`<p>Item "${itemName}" doesn't exists</p>`);
  }
});

app.listen(3000);

function printReqSummary(request) {
  console.log(`Handling ${request.method} ${request.originalUrl}`);
}
