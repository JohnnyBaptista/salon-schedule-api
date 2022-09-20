/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function (knex) {
    return knex.schema.createTable("brand", (tbl) => {
      tbl.increments("id").primary();
      tbl.text("name", 128).notNullable();
      tbl.timestamp(true, true)
    });
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("brand");
  };
  