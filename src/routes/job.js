const express = require('express');
const jobController = require('../controller/JobController');

const routes = express.Router();

routes.get('/', jobController.findAll);
routes.post('/', jobController.store);
routes.get('/:id', jobController.getJobById);
routes.patch('/:id', jobController.updateJob);
routes.delete('/:id', jobController.deleteJob);

module.exports = routes;