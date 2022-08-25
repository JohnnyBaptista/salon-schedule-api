// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/db/salon-schedule.sqlite3",
    },
    migrations: {
      directory: './data/migrations',
    },
    useNullAsDefault: true,
  },
};
