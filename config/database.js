const { Sequelize } = require("sequelize");
 
const db = new Sequelize('sequelize_relasi', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
 
module.exports = db;