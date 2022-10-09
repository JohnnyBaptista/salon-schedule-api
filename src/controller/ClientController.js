const queryMaker = require("../models/dbHelpers");

const findAll = async (req, res) => {
  try {
    const clients = await queryMaker.findAll("client");
    return res.json(clients);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const store = async (req, res) => {
  try {
    const { name, email, telephone, birth } = req.body;
    console.log({birth});
    const insertedClient = await queryMaker.add("client", {
      name,
      telephone,
      email,
      birth,
    });
    return res.status(200).json(insertedClient);
  } catch (error) {
    return res.status(500).json(error);
  }
};

//todo
const updateClient = async (req, res) => {
  try {
    res.send(true);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getClientById = async (req, res) => {
  try {
    res.send(true);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteClient = async (req, res) => {
  try {
    res.send(true);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { findAll, store, updateClient, deleteClient, getClientById };
