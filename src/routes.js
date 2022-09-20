const express = require('express')
const users = require('./routes/users');
const brands = require('./routes/brands');
const routes = express.Router();

routes.use('/users', users);
routes.use('/brand', brands);
module.exports = routes;