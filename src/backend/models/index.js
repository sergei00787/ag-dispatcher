const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const instSequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        schema: dbConfig.SCHEMA,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    });

const db = {};

db.Sequelize = Sequelize;
db.instSequelize = instSequelize;

instSequelize.sync({});

// BIND Models to DB
db.user = require("./user.model.js")(instSequelize, Sequelize);

module.exports = db;