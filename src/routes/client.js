const express = require('express');
const clientController = require('../controller/ClientController');

const routes = express.Router();

routes.get('/', clientController.findAll);
routes.post('/', clientController.store);
routes.get('/:id', clientController.getClientById);
routes.patch('/:id', clientController.updateClient);
routes.delete('/:id', clientController.deleteClient);

module.exports = routes;