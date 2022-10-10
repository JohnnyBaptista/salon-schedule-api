const express = require("express");
const userController = require("../controller/UsersController");
const { createHashPass } = require("../utils/passwordHash");

const routes = express.Router();

routes.get("/", userController.getAllUsers);
routes.post( "/",  function (req, res, next) {
    const pass = req.body.password;
    if(!!pass) {
      req.body.password = createHashPass(pass);
      return next();
    } 
    return res.status(400).json("Senha é obrigatório!");
  },
  userController.createUser
);
routes.get("/:id", userController.getUserById);
routes.patch("/:id", userController.updateUser);
routes.delete("/:id", userController.deleteUser);
routes.post("/login",userController.loginUser)

module.exports = routes;