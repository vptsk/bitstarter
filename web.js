#!/usr/bin/env node
var fs = require('fs');
var express = require('express');
var app = express.createServer(express.logger());

//var buf = new Buffer(256);
////var json = JSON.stringify(buf.toString('utf8', 0 , len));


app.get('/', function(request, response) {
	var buf = new Buffer(256);

	fs.readFile('./index.html', function (err, buf) {
		if (err) throw err;
		console.log("READ OK >" + buf.toString('utf8', 0, buf.length) + " < END ");
	});

	//response.send(buf.toString('utf8', fs.readFileSync("./index.html")))
	response.send(buf.toString('utf8', 0, buf.length))
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
