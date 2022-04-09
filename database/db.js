import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  password: "ammar123",
  host: "localhost",
  port: 6000,
  database: "personal-blog",
});

export default pool;
