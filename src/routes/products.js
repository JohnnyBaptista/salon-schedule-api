const express = require('express');
const productsController = require('../controller/ProductsController');

const routes = express.Router();

// Aqui foi posto um novo comentario 
routes.get('/', productsController.getAllBrand);
routes.post('/', productsController.createBrand);
routes.get('/:id', productsController.getBrandById);
routes.patch('/:id', productsController.updateBrand);
routes.delete('/:id', productsController.deleteBrand);

module.exports = routes;