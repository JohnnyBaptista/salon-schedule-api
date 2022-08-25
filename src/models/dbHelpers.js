const knex = require('knex')
const config = require('../../knexfile');
const db = knex(config.development);

function add(tbl, data) {
    return db(tbl).insert(data);
}

function findAll(tbl) {
    return db(tbl);
}

function findById(tbl, id) {
    return db(tbl).where('id', id);
}

function deleteOne(tbl, id) {
    return db(tbl).where('id', id).del();
}

function updateOne(tbl, id, newData) {
    return db(tbl).where('id', id).update(newData);
}


module.exports = { add, findById, findAll, deleteOne, updateOne }