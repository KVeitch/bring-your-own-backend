// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/byobdb',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true,
    seeds: {
      directory: './db/seeds/dev'
    },
  },

};
