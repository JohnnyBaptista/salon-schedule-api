const queryMaker = require("../models/dbHelpers");
const { createHashPass } = require("../utils/passwordHash");
const store = async (req, res) => {
  try {
    const { username, password } = req.body;
    const insertedUser = await queryMaker.add("users", { username, password });
    return res.status(200).json(insertedUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const findAll = async (req, res) => {
  try {
    const users = await queryMaker.findAll("users");
    return res.json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const findOne = async (req, res) => {
  try {
    const user = await queryMaker.findById("users", req.params.id);
    delete user[0].password;
    return res.status(200).json(user[0]);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteOne = async (req, res) => {
  try {
    const user = await queryMaker.deleteOne("users", req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateOne = async (req, res) => {
  try {
    const user = await queryMaker.updateOne("users", req.params.id, req.body);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body; //vem do body do insmonia

    const verify = await queryMaker.findByColumn("users", "username", username); //vem do banco
    if (!verify.length > 0) {
      return res.status(404).json({ msg: "Usuario ou senha não existem" });
    }
    console.log({ verify });
    const new_password = createHashPass(password);
    const isPasswordsValid = verify[0].password === new_password;
    const tokenObj = { username, user_id: verify[0].id };
    const token = Buffer.from(JSON.stringify(tokenObj)).toString("base64");
    if (isPasswordsValid) {
      return res.status(200).json({ msg: "Login feito com sucesso", token });
    }
    return res.status(400).json({ msg: "Usuario ou senha não existem" });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  createUser: store,
  getAllUsers: findAll,
  getUserById: findOne,
  deleteUser: deleteOne,
  updateUser: updateOne,
  loginUser: login,
};
