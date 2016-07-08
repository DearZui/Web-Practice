var mongoose = require('mongoose');
var Todo = require('../db/db').Todo;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.send('Hello from TODO');
});

router.post('/', function(req, res) {
	var todo = new Todo(req.body);
	todo.save(function(err) {
		if (err) { console.log(err); }
	});
});

module.exports = router;