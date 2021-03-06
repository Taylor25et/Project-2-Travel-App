const Sequelize = require('sequelize');
// const mysql = require('mysql2');
require('dotenv').config();

// heroku test
// Sequelize Method
const sequelize = process.env.JAWSDB_URL ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
  });

module.exports = sequelize;