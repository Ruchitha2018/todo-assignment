const Sequelize = require('sequelize');
const db = {}

const sequelize = new Sequelize("leapcraft-db", "root", "", {
  host: 'localhost',
  dialect: 'mysql',
  operatorAliases: false,    
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }    
});

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db;

//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');