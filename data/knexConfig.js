const knex = require('knex');

// configured a connection to the database
const knexfile = require("../knexfile.js")

const enviroment = process.env.NODE_ENV || "development"

const knexConfig = knexfile[enviroment];
  
  // db represents a live connection to the database
module.exports = knex(knexConfig);