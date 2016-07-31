const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connet-mongo')(session);
const flash = require('flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const uuid = require('node-uuid');
const appData = require('./data.json');

//create data
const userData = appData.users;
const exclamationData = appData.exclamations;

function getUser(username) {
	const user = userData.find(u => u.username === username);
	return Object.assign({}, user);
}

//create default port
const PORT = process.env.PORT || 3000;

//create a new server
const server = express();

//Configure server
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(session({
	secret: process.env.SESSION_SECRET || 'awesomecookiesecret',
	resave: false,
	saveUninitialized: false,
	store: new MongoStore({
		url: process.env.MONGO_URL || 'mongodb:/localhost/vue2-auth',
	}),
}));
server.use(flash());
server.use(express.static('public'));
server.use(passport.initialize());
server.use(passport.session());
server.set('views', './views');
server.use('view engine', 'pug');