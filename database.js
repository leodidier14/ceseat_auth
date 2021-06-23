const Sequelize = require('sequelize')

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '.env') })

const database = new Sequelize(process.env.DB_NAME, process.env.USER_NAME, process.env.USER_PW, {
    host: process.env.DB_HOST,
    dialect: 'mssql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
    },
    define: {
        "timestamps": false
    }
});

database.sync();

module.exports = database;