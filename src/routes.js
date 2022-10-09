const express = require('express')
const users = require('./routes/users');
const brands = require('./routes/brands');
const products = require('./routes/products');
const worker = require('./routes/worker');
const client = require('./routes/client');
const job = require('./routes/job');
const routes = express.Router();

routes.use('/users', users);
routes.use('/brand', brands);
routes.use('/worker', worker);
routes.use('/client', client);
routes.use('/job', job);
routes.use('/products', products);

module.exports = routes;