var Sequelize = require('sequelize')
var sequelize = require('../database')

var User = sequelize.define("User", {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    addressid:{
        type: Sequelize.INTEGER,
        foreignkey: true,
    },
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    phoneNumber: Sequelize.STRING,
    userType: Sequelize.STRING,
    refreshtoken: Sequelize.TEXT,
    sponsorshipLink: Sequelize.STRING,
    isSuspended: Sequelize.BOOLEAN,
});

module.exports = User;
