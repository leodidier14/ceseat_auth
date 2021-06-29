const mongoose = require('mongoose');
const { Schema } = mongoose;

const apiinfo = new Schema({
    name : String,
    version : String
});

module.exports = mongoose.model('apiinf', apiinfo)