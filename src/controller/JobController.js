const queryMaker = require("../models/dbHelpers");

const findAll = async (req, res) => {
  try {
    const join = await queryMaker.workClientJoin();
    console.log(join)
    return res.json(join);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
/**
 * work_description
 * date
 * price
 * worker_id
 * client_id
 * @returns 
 */
const store = async (req, res) => {
  try {
    const { client_id, worker_id } = req.body;
    const workerSent = await queryMaker.findById("worker", worker_id);
    const clientSent = await queryMaker.findById("client", client_id);
    if (!workerSent.length > 0) {
      return res
        .status(404)
        .json({ msg: `Funcionário com o id ${worker_id} não existe` });
    }
    if (!clientSent.length > 0) {
      return res
        .status(404)
        .json({ msg: `Cliente com o id ${client_id} não existe` });
    }
    const insertedJob = await queryMaker.add("work-client", req.body);
    return res.status(200).json(insertedJob);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

//todo
const updateJob = async (req, res) => {
  try {
    const job = await queryMaker.findById("work-client", req.params.id);
    if (!job.length > 0) {
      return res
        .status(404)
        .json({ msg: `Trabalho com o id ${req.params.id} não existe` });
    }
    const updatedJob = await queryMaker.updateOne(
      "work-client",
      req.params.id,
      req.body
    );
    return res.status(200).json(updatedJob);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getJobById = async (req, res) => {
  try {
    const job = await queryMaker.findById("work-client", req.params.id);
    return res.status(200).json(job);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteJob = async (req, res) => {
  try {
    const job = await queryMaker.findById("work-client", req.params.id);
    if (!job.length > 0) {
      return res
        .status(404)
        .json({ msg: `Trabalho com o id ${req.params.id} não existe` });
    }
    await queryMaker.deleteOne("work-client", req.params.id);
    return res.status(200).json({ msg: "Deletado com sucesso" });
  } catch (error) {
    console.log(error)
    return res.status(500).json(error);
  }
};

module.exports = { findAll, store, updateJob, deleteJob, getJobById };
