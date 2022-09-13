const queryMaker = require("../models/dbHelpers");

const store = async (req, res) => {
  console.log({ body: req.body });
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
    return res.status(200).json(user);
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

module.exports = {
  createUser: store,
  getAllUsers: findAll,
  getUserById: findOne,
  deleteUser: deleteOne,
  updateUser: updateOne,
};
