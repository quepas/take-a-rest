# take-a-rest

Simple tutorial for your first [REST API](https://www.wikiwand.com/en/Representational_state_transfer).
And then, just take a rest.

## Introduction

In this tutorial you will learn how to start a [HTTP server](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server), parse URL parameters (and queries), use different [HTTP methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) and prepare very simple [REST API](https://www.wikiwand.com/en/Representational_state_transfer) linked with even simpler database.
One step at a time.
Each presented example tries to answer one question:

* **01_HttpServer** - _How to start a HTTP server?_
* **02_UrlParameters** - _How to extract URL parameters (and queries) from HTTP requests?_
* **03_HttpMethods** - _How to use different HTTP methods (e.g. GET, PUT, DELETE)?_
* **04_RestDatabase** - _How to prepare a simple REST API integrated with even simpler database?_

### Infrastructure

This tutorial is build over [node.js](https://nodejs.org/en/) infrastructure with a help of two packages:

* [Express](http://expressjs.com) - a minimal web framework (for _building http server_, _handling request/response_)
* [lowdb](https://github.com/typicode/lowdb) - single JSON file database (for _data access and storage_)

For project installation and management we will use [NPM Package Manager](https://www.npmjs.com/). For testing servers and REST APIs we will use [cURL](https://curl.haxx.se/).

### Installation

* Download and install [node.js](https://nodejs.org/en/download/)
* Check if these commands work in console: `node` and `npm`
* Clone this repository `git clone https://github.com/quepas/take-a-rest`
* Go to the project directory `cd take-a-rest`
* Install required packages using NPM command `npm install`
* Run example code using `npm run 01_HttpServer`
* **FOR TESTING**: Check if you have [cURL](https://curl.haxx.se/), otherwise install it

### Running example

In order to run an example type in console `npm run` with example name.
For instance `npm run 01_HttpServer`.
After that, an appropriate HTTP server will start and wait for your requests.

For simple interaction by GET method you can use a browser.
Just type server URL (usually `localhost:3000`).
For complex interaction with server using other HTTP methods use _cURL_ utility from your console.
To specify a HTTP method use option `-X` as follow:

```bash
curl -X GET "localhost:3000"
```

```bash
curl -X PUT "localhost:3000/item/bicycle"
```

```bash
curl -X DELETE "localhost:3000/item/bicycle"
```

### Possible errors

* **Address In Use** [`Error: listen EADDRINUSE :::3000`] - another server or service is using port 3000. Close this process (might be hidden) or use different port number for your server.

## Tutorial

### 01_HttpServer

### 02_UrlParameters

### 03_HttpMethods

### 04_RestDatabase

### Future extensions

* Replace [lowdb](https://github.com/typicode/lowdb) with your favourite database (e.g. [PostgreSQL](https://www.postgresql.org/), [MySQL](https://www.mysql.com/), [MongoDB](https://www.mongodb.com/)). Read more about [Express + databases integration](http://expressjs.com/en/guide/database-integration.html)

## Additional materials

### Programming

* [Express + Database Integration](http://expressjs.com/en/guide/database-integration.html) (MySQL, PostgreSQL, SQLite and many others)
* [Express API Documentation](http://expressjs.com/en/4x/api.html)
* [Node.js Tutorial](https://www.tutorialspoint.com/nodejs/index.htm)
* [Lowdb documentation](https://github.com/typicode/lowdb/blob/master/README.md)

### Hypertext Transfer Protocol (HTTP)

* [What is a web (HTTP) server?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)
* [An Overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
* [HTTP Request Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
* [HTTP Response Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

### Representational state transfer (REST)

* [What exactly is "restful programming"?](https://stackoverflow.com/questions/671118/what-exactly-is-restful-programming)
* [REST API Tutorial](http://www.restapitutorial.com/)
