import dotenv from "dotenv";
import app from "./app.js";
import dbPool from "./database/db.js";

dotenv.config();

const SERVER_PORT = process.env.PORT || 5000;

/*
.
.
    Server
.
.
*/
let server;

server = app.listen(SERVER_PORT, () => {
  console.log(`Server listening on ${SERVER_PORT}`);
});
