
const mongoose = require('mongoose');
const { Schema } = mongoose;

const logsSchema = new Schema({
    idUser : Number,
    type : String,
    time : String,
    state: String
});

module.exports = mongoose.model('Logs', logsSchema)
