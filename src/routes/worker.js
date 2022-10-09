const express = require('express');
const workerController = require('../controller/WorkerController');

const routes = express.Router();

routes.get('/', workerController.findAll);
routes.post('/', workerController.store);
routes.get('/:id', workerController.getWorkerById);
routes.patch('/:id', workerController.updateWorker);
routes.delete('/:id', workerController.deleteWorker);

module.exports = routes;