exports.up = function (knex) {
    return knex.schema.table("work-client", (table) => {
      table.dropColumn("endDateDate");
      table.datetime("endDate", { precision: 6 });
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.table("work-client", (table) => {
      table.dropColumn("endDate");
    });
  };
  
  