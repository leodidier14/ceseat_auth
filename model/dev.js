var Sequelize = require('sequelize')
var sequelize = require('../database')

var Dev = sequelize.define("Dev", {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    siret: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    userType: Sequelize.STRING, //dev par defaut
    refreshtoken: Sequelize.TEXT
});

module.exports = Dev;
