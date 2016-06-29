var express = require('express');
var app = express();

app.get('/', function(req, res) {
	// homepage
});

app.post('/api/shorten', function(req, res) {
	// shorten url
});

app.get(':encoded_id', function(req, res){
	// redirect to short url
});

var server = app.listen(3000, function() {
	console.log('Server is now listening on port 3000');
});