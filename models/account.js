const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const accountSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true }
});

module.exports = mongoose.model('Account', accountSchema);