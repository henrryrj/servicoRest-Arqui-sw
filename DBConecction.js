const { Pool } = require("pg");

require('dotenv').config();

const database = process.env.DATABASE || "p2_soa_arqui";
const username = process.env.DB_USERNAME || "postgres";
const password = process.env.PASSWORD || "0406";
const host = process.env.HOST || "localhost";

const pgAdmin = new Pool({
  database,
  host,
  password,
  port: process.env.DB_PORT,
  user: username,
  // ssl: {
  //   rejectUnauthorized: false
  // }
});

module.exports = pgAdmin;