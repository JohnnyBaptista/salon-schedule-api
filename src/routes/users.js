const express = require('express');
const userController = require('../controller/UsersController');
const MarcaController = require('../controller/MarcaController');
const routes = express.Router();

routes.get('/', userController.getAllUsers);
routes.post('/', userController.createUser);
routes.get('/:id', userController.getUserById);
routes.patch('/:id', userController.updateUser);
routes.delete('/:id', userController.deleteUser);

// Marca 
routes.get('/', MarcaController.getAllMarca);
routes.post('/', MarcaController.createMarca);
routes.get('/:id', MarcaController.getMarcaById);
routes.patch('/:id', MarcaController.updateMarca);
routes.delete('/:id', MarcaController.deleteMarca);


module.exports = routes;