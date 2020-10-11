/**
 * Database Configuration Object
 */
const dbconfig = {
        HOST: "mariadb-13793-0.cloudclusters.net",
        USER: "admin",
        PASSWORD: "faketwitter123",
        DB: "FakeTwitter",
        dialect: "mysql",
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
};
module.exports = dbconfig;
