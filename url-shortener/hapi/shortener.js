const Hapi = require('hapi');
const server = new Hapi.Server();
const routes = require('./routes');
const mongoose = require('mongoose');
const mongoUri = process.env.MONGOURI || 'mongodb://localhost/shortio';