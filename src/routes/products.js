const express = require('express');
const productsController = require('../controller/ProductsController');

const routes = express.Router();

// Aqui foi posto um novo comentario 
routes.get('/', productsController.getAllProducts);
routes.post('/', productsController.createProducts);
routes.get('/:id', productsController.getProductsById);
routes.patch('/:id', productsController.updateProducts);
routes.delete('/:id', productsController.deleteProducts);

module.exports = routes;