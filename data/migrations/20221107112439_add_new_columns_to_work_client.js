exports.up = function (knex) {
  return knex.schema.table("work-client", (table) => {
    table.dropColumn("date");
    table.datetime("startDate", { precision: 6 });
    table.datetime("endDateDate", { precision: 6 });
  });
};

exports.down = function (knex) {
  return knex.schema.table("work-client", (table) => {
    table.dropColumn("startDate");
    table.dropColumn("endDate");
  });
};

