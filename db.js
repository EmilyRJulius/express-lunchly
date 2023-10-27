/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql://postgres:postgres@localhost:3000/lunchly");

db.connect();

module.exports = db;
