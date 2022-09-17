const express = require('express');
const brandController = require('../controller/BrandController');


routes.get('/', brandController.getAllBrand);
routes.post('/', brandController.createBrand);
routes.get('/:id', brandController.getBrandById);
routes.patch('/:id', brandController.updateBrand);
routes.delete('/:id', brandController.deleteBrand);

module.exports = routes;