const mongoose = require('mongoose');
const { Schema } = mongoose;

const requestLog = new Schema({
    name : String,
    date : Date,
});

module.exports = mongoose.model('requestLog', requestLog)