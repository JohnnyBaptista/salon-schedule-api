/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('worker', tbl => {
      tbl.increments('id').primary();
      tbl.text('name', 128).notNullable();
      tbl.text('email', 256).notNullable();
      tbl.text('telephone', 256).notNullable();
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('worker');
  };
  