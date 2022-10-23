const queryMaker = require("../models/dbHelpers");

const findAll = async (req, res) => {
  try {
    const workers = await queryMaker.findAll("worker");
    const join = await queryMaker.join('work-client', 'worker_id', 'worker', 'id');
    console.log({join})
    return res.json(workers);
  } catch (error) {
    console.log(error)
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

//todo
const updateWorker = async (req, res) => {
  try {
    res.send(true);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getWorkerById = async (req, res) => {
  try {
    res.send(true);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteWorker = async (req, res) => {
  try {
    res.send(true);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { findAll, store, updateWorker, deleteWorker, getWorkerById };
