#!/bin/env node
var http = require('http');
var express = require('express');
var app = express();

app.listen(8080, function () {
  console.log('app listening on port 8080!')
})

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Init page!');
});
