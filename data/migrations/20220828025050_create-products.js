/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("products", (tbl) => {
    tbl.increments("id").primary();
    tbl.text("name", 128).notNullable();
    tbl.integer("quantity").notNullable();
    // references
    tbl.integer("brand_id", 256).references('brand.id').notNullable().onDelete("CASCADE");
    tbl.timestamp(true, true)
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("products");
};

