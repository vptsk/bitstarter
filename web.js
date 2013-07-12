#!/usr/bin/env node
var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());

var buf = new Buffer(256);

fs.readFile('./index.html', function (err, buf) {
  if (err) throw err;
  //if (err) console.log('ERROR')
    console.log(buf);
});

var len = buf.length;

app.get('/', function(request, response) {
  response.send(len + " bytes: " + buf.toString('utf8', 0, len))
  //response.send('Hello World 2 !');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
