var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var methodOverride = require('method-override')

var routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json())

// override with different headers; last one takes precedence
app.use(methodOverride('X-HTTP-Method'));          // Microsoft
app.use(methodOverride('X-HTTP-Method-Override')); // Google/GData
app.use(methodOverride('X-Method-Override'));      // IBM
app.use(methodOverride('_method'));

app.use('/', routes);

var server = app.listen(8080, '127.0.0.1', function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);

});

module.exports = app;