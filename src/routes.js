const express = require('express')
const users = require('./routes/users');

const routes = express.Router();

routes.use('/users', users);
routes.use('/brand', users);
module.exports = routes;