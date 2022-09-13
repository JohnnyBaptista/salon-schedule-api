const queryMaker = require("../models/dbHelpers");

const store = async (req, res) => {
  console.log({ body: req.body });
  try {
    const { username, password } = req.body;
    const insertedUser = await queryMaker.add("Marca", { username, password });
    return res.status(200).json(insertedUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const findAll = async (req, res) => {
  try {
    const Marca = await queryMaker.findAll("Marca");
    return res.json(Marca);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const findOne = async (req, res) => {
  try {
    const Marca = await queryMaker.findById("Marca", req.params.id);
    return res.status(200).json(Marca);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteOne = async (req, res) => {
  try {
    const user = await queryMaker.deleteOne("Marca", req.params.id);
    return res.status(200).json(Marca);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateOne = async (req, res) => {
  try {
    const Marca = await queryMaker.updateOne("Marca", req.params.id, req.body);
    return res.status(200).json(Marca);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  createMarca: store,
  getAllMarca: findAll,
  getMarcaById: findOne,
  deleteMarca: deleteOne,
  updateMarca: updateOne,
};
