const queryMaker = require("../models/dbHelpers");

const store = async (req, res) => {
  try {
    const { name, amount, brand_id } = req.body;
    const brandConference = await queryMaker.findById("brand", brand_id);
    if (!brandConference.length > 0) {
      return res.status(404).json({ msg: "Marca não encontrada" });
    }
    const insertedProducts = await queryMaker.add("products", {
      name,
      quantity: amount,
      brand_id,
    });
    return res.status(200).json(insertedProducts);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const findAll = async (req, res) => {
  try {
    const products = await queryMaker.findAll("products");
    return res.json(products);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const findOne = async (req, res) => {
  try {
    const products = await queryMaker.findById("products", req.params.id);
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteOne = async (req, res) => {
  try {
    const products = await queryMaker.deleteOne("products", req.params.id);
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateOne = async (req, res) => {
  try {
    const {brand_id} = req.body
    const brandConference = await queryMaker.findById("brand", brand_id);
    console.log(brandConference)
    if (!brandConference.length > 0) {
      return res.status(404).json({ msg: "Marca não encontrada" });
    }
    const products = await queryMaker.updateOne(
      "products",
      req.params.id,
      req.body
    );
    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  createProducts: store,
  getAllProducts: findAll,
  getProductsById: findOne,
  deleteProducts: deleteOne,
  updateProducts: updateOne,
};
