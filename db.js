const { Pool } = require('pg')

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
})

// sets up a connection pool to the PostgreSQL database using the pg library and exports a query function that can run SQL queries on your database. 

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
}
