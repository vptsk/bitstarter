var express = require('express');

var app = express.createServer(express.logger());

buf = new Buffer(256);
//len = buf.write('\u00bd + \u00bc = \u00be', 0);
console.log(len + " bytes: " + buf.toString('utf8', 0, len));

fs.readFileSync('index.html', function (err, buf) {
  if (err) throw err;
    console.log(data);
    });
len = buf.length;

app.get('/', function(request, response) {
  response.send(len + " bytes: " + buf.toString('utf8', 0, len))
  //response.send('Hello World 2 !');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
