const queryMaker = require("../models/dbHelpers");

const store = async (req, res) => {
  try {
    const { username, password } = req.body;
    const insertedBrand = await queryMaker.add("brand", { username, password });
    return res.status(200).json(insertedBrand);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const findAll = async (req, res) => {
  try {
    const brand = await queryMaker.findAll("brand");
    return res.json(brand);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const findOne = async (req, res) => {
  try {
    const brand = await queryMaker.findById("brand", req.params.id);
    return res.status(200).json(brand);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteOne = async (req, res) => {
  try {
    const brand = await queryMaker.deleteOne("brand", req.params.id);
    return res.status(200).json(brand);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateOne = async (req, res) => {
  try {
    const brand = await queryMaker.updateOne("brand", req.params.id, req.body);
    return res.status(200).json(brand);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  createBrand: store,
  getAllBrand: findAll,
  getBrandById: findOne,
  deleteBrand: deleteOne,
  updateBrand: updateOne,
};
