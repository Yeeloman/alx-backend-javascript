#!/usr/bin/node

const http = require('http');

const hostname = 'localhost';
const port = 1245;

const app = http.createServer((req, resp) => {
  resp.statusCode = 200;
  resp.setHeader('Content-Type', 'text/plain');
  resp.end('Hello Holberton School');
});

app.listen(port, hostname, () => {});

module.exports = app;
