const express = require('express')
const users = require('./routes/users');

const routes = express.Router();

routes.use('/users', users);

module.exports = routes;