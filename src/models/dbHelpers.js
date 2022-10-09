const knex = require("knex");
const config = require("../../knexfile");
const db = knex(config.development);

function add(tbl, data) {
  return db(tbl).insert(data);
}

function findAll(tbl) {
  return db(tbl);
}

function findById(tbl, id) {
  return db(tbl).where("id", id);
}

function deleteOne(tbl, id) {
  return db(tbl).where("id", id).del();
}

function updateOne(tbl, id, newData) {
  return db(tbl).where("id", id).update(newData);
}

function join(tbl_1, tbl_1_id, tbl_2, tbl_2_id) {
  return db
    .from(tbl_1)
    .innerJoin(tbl_2, `${tbl_1}.${tbl_1_id}`, `${tbl_2}.${tbl_2_id}`);
}

function workClientJoin() {
  return db
    .select("work-client.*", "worker.name as worker_name", "client.name as client_name")
    .from("work-client")
    .innerJoin("worker", "work-client.worker_id", "worker.id")
    .innerJoin("client", "work-client.client_id", "client.id")
}

module.exports = { add, findById, findAll, deleteOne, updateOne, join, workClientJoin};
