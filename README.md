# take-a-rest

Simple tutorial for your first REST API. And then, just take a rest.

## Introduction

In this tutorial you will learn how to start a HTTP server, parse URL parameters (and queries), use different HTTP methods and prepare very simple REST API linked with even simpler database. One step at a time. Each presented example tries to answer one question:

* **01_HttpServer** - Q: _How to start a HTTP server?_
* **02_UrlParameters** - Q: _How to extract URL parameters (and queries) from HTTP requests?_
* **03_HttpMethods** - Q: _How to use different HTTP methods (e.g. GET, POST, DELETE)?_
* **04_RestDatabase** - Q: _How to prepare a simple REST API integrated with even simpler database (JSON file; `lowdb` package)?_

Then answer to all these questions is simple: _just do it_.

### Infrastructure

This tutorial is build over [node.js](https://nodejs.org/en/) infrastructure with a help of two packages:

* [Express](http://expressjs.com) - a minimal web framework (for _building http server_, _handling request/response_)
* [lowdb](https://github.com/typicode/lowdb) - single JSON file database (for _data access and storage_)

For project installation and management we will use [NPM Package Manager](https://www.npmjs.com/). For testing servers and REST APIs we will use [Postman](https://www.getpostman.com/).

### Installation

* Download and install [node.js](https://nodejs.org/en/download/)
* Check if these commands work in console: `node` and `npm`
* Clone this repository `git clone https://github.com/quepas/take-a-rest`
* Go to the project directory `cd take-a-rest`
* Install required packages using NPM command `npm install`
* Run example code using `npm run 01_HttpServer`
* **FOR TESTING**: Download and install [Postman](https://www.getpostman.com/) (or install as a Chrome extension _[deprecated]_)
* **OPTIONAL IN THE FUTURE**: Replace `lowdb` with your favourite database (e.g. PostgreSQL, MySQL, MongoDB)

### Running example

Each example has its own run script defined in `package.json` file:

```json
"scripts": {
    "01_HttpServer": "node 01_HttpServer/app.js",
    "02_UrlParameters": "node 02_UrlParameters/app.js",
    "03_HttpMethods": "node 03_HttpMethods/app.js",
    "04_RestDatabase": "node 04_RestDatabase/app.js"
  }
```

In order to run code just type in console `npm run NAME`, where `01_HttpServer` is an example name.
Or you can just type `node SCRIPT` where script is a path to your JavaScript code.

## Examples

### Description

#### 01_HttpServer

## Possible errors

* `Error: listen EADDRINUSE :::3000` - you are running a http server on a given port number (here 3000), but another server is already using it. Close previous server process (might be hidden) or use different port number for you server.

## Additional materials

* [Express Database Integration](http://expressjs.com/en/guide/database-integration.html) (MySQL, PostgreSQL, SQLite and many others)
* [Express API documentation](http://expressjs.com/en/4x/api.html)
* [Node.js tutorial](https://www.tutorialspoint.com/nodejs/index.htm)
