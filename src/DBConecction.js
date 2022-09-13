const { Pool } = require("pg");

const pgAdmin = new Pool({
  database: 'd52sq18q8apb5o',
  host: 'ec2-34-231-42-166.compute-1.amazonaws.com',
  password: 'b20cdffe743b0ac37139c15ccee771bf0d790e8607174089e9f612411045cba4',
  port: '5432',
  user: 'shvthkbamnppbu',
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = pgAdmin;