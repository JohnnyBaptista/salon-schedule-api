const express = require('express');
const workerController = require('../controller/WorkerController');

const routes = express.Router();

routes.get('/', workerController.findAll);
