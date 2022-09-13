/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("products", (tbl) => {
    tbl.increments("id").primary();
    tbl.text("name", 128).notNullable();
    tbl.integer("quantity").notNullable();
    tbl.integer("category_id", 256).references('category.id');
    // Relacionamento
    tbl.integer(Marca_id).references('Marca.id').notNullable.onDelete('CASCADE')
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("products");
};

