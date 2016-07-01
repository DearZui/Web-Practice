var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./config');
var base58 = require('./base58.js');

var Url = require('./models/url');

mongoose.connect('mongod://' + config.db.host + '/' + config.db.name);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// server files from public folder
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
	// homepage
	res.sendFile(path.join(__dirname, 'views/index.html'))
});

app.post('/api/shorten', function(req, res) {
	// shorten url
	var longUrl = req.body.url;
	var shortUrl = '';

	Url.findOne()({long_url: longUrl}, function(err, doc) {
		if (doc) {

		} else {

		}
	});
});

app.get(':encoded_id', function(req, res){
	// redirect to short url
});

var server = app.listen(3000, function() {
	console.log('Server is now listening on port 3000');
});