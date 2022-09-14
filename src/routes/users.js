const express = require('express');
const userController = require('../controller/UsersController');
const brandController = require('../controller/BrandController');

const routes = express.Router();

routes.get('/', userController.getAllUsers);
routes.post('/', userController.createUser);
routes.get('/:id', userController.getUserById);
routes.patch('/:id', userController.updateUser);
routes.delete('/:id', userController.deleteUser);
// Endpoints for brands
routes.get('/', brandController.getAllBrand);
routes.post('/', brandController.createBrand);
routes.get('/:id', brandController.getBrandById);
routes.patch('/:id', brandController.updateBrand);
routes.delete('/:id', brandController.deleteBrand);

module.exports = routes;