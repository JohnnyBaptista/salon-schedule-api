/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("client", (tbl) => {
    tbl.increments("id").primary();
    tbl.text("name", 128).notNullable();
    tbl.text("email", 256).notNullable();
    tbl.text("telephone", 256).notNullable();
    tbl.datetime("birth", { precision: 6 }).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists("client");
};

