#!/usr/bin/env node
var fs = require('fs');
var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	//var buf = new Buffer(256);
	var buf = new Buffer(fs.readFileSync('index.html'), 'utf-8'); 
	response.send(buf.toString('utf8'))
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
