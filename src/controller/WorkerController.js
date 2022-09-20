const queryMaker = require("../models/dbHelpers");

const findAll = async (req, res) => {
  try {
    const workers = await queryMaker.findAll("worker");
    return res.json(workers);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const store = async (req, res) => {
  try {
    const { name, email, telephone } = req.body;
    const insertedWorker = await queryMaker.add("worker", {
      name,
      telephone,
      email,
    });
    return res.status(200).json(insertedWorker);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { findAll, store };

