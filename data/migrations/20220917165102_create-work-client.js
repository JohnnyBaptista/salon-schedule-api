/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("work-client", (tbl) => {
    tbl.increments("id").primary();
    tbl.text("work_description", 256).notNullable();
    tbl.datetime("date", { precision: 6 }).notNullable();
    tbl.float('price', 2).notNullable();
    tbl
      .integer("worker_id", 256)
      .references("worker.id")
      .notNullable()
      .onDelete("CASCADE");
    tbl
      .integer("client_id", 256)
      .references("client.id")
      .notNullable()
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTableIfExists("work-client");
};

