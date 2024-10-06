require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.connect((err) => {
  if (err) {
    console.error("Failed to connect to PostgreSQL", err);
  } else {
    console.log("PostgreSQL connected");
  }
});

module.exports = {
  pool,
};
