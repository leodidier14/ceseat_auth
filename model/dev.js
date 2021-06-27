var Sequelize = require('sequelize')
var sequelize = require('../database')

var Dev = sequelize.define("Dev", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    companyName: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    refreshtoken: Sequelize.TEXT
});

module.exports = Dev;
