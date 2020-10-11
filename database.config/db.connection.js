// IMPORT CONFIG
const dbConfig = require("../database.config/db.config.js");
// IMPORT SEQUALIZE
const Sequelize = require("sequelize");
// CREATE A CONNECTION
const sequelizeConnection = new Sequelize('mysql://admin:faketwitter123@mariadb-13793-0.cloudclusters.net:13824/FakeTwitter', {
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
// EXPORT THE CONNECTION
module.exports = sequelizeConnection;