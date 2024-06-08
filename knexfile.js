require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    },    
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST_STAGING,
      database: process.env.DB_NAME_STAGING,
      user: process.env.DB_USER_STAGING,
      password: process.env.DB_PASS_STAGING
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST_PROD,
      database: process.env.DB_NAME_PROD,
      user: process.env.DB_USER_PROD,
      password: process.env.DB_PASS_PROD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
