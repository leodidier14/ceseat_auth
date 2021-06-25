var Sequelize = require('sequelize')

var sequelize = require('../database')

var User = sequelize.define("user", {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    addressid:{
        type: Sequelize.INTEGER,
        foreignkey: true,
    },
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    phone: Sequelize.STRING,
    usertype: Sequelize.STRING,
    refreshtoken: Sequelize.TEXT,
    sponsorship: Sequelize.STRING 
});

module.exports = User;
