# take-a-rest

Simple tutorial for your first REST API. And then, just take a rest.

## Introduction

In this tutorial you will learn how to start a HTTP server, parse URL parameters (and queries), use different HTTP methods and prepare very simple REST API linked with even simpler database. One step at a time. Each presented example tries to answer one question:

* **01_HttpServer** - _How to start a HTTP server?_
* **02_UrlParameters** - _How to extract URL parameters (and queries) from HTTP requests?_
* **03_HttpMethods** - _How to use different HTTP methods (e.g. GET, PUT, DELETE)?_
* **04_RestDatabase** - _How to prepare a simple REST API integrated with even simpler database?_

Then answer to all these questions is simple: _just do it_.

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

In order to run code just type in console `npm run 01_HttpServer` (or one of: `02_UrlParameters`, `03_HttpMethods`, `04_RestDatabase`).
Or you node directly `node scriptName.js`.

In order to interact with the server use _cURL_ utility from your console.
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

* **Address In Use** [`Error: listen EADDRINUSE :::3000`] - another server and/or service is using port 3000. Close this process (might be hidden) or use different port number for you server.

## Tutorial

### 01_HttpServer

### 02_UrlParameters

### 03_HttpMethods

### 04_RestDatabase

### Future extensions

* Replace [lowdb](https://github.com/typicode/lowdb) with your favourite database (e.g. [PostgreSQL](https://www.postgresql.org/), [MySQL](https://www.mysql.com/), [MongoDB](https://www.mongodb.com/))

## Additional materials

* [Express + Database Integration](http://expressjs.com/en/guide/database-integration.html) (MySQL, PostgreSQL, SQLite and many others)
* [Express API documentation](http://expressjs.com/en/4x/api.html)
* [Node.js tutorial](https://www.tutorialspoint.com/nodejs/index.htm)
