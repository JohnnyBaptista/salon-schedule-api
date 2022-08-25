const express = require('express');
const userController = require('../controller/UsersController');

const routes = express.Router();

routes.get('/', userController.getAllUsers);
routes.post('/', userController.createUser);
routes.get('/:id', userController.getUserById);
routes.patch('/:id', userController.updateUser);
routes.delete('/:id', userController.deleteUser);

module.exports = routes;