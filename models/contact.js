const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const contactSchema = new Schema({
    firstname: { type: String },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    creator: { type: String, required: true },
    createdbysfid: { type: String, required: true }
})
module.exports = mongoose.model('Contact', contactSchema);