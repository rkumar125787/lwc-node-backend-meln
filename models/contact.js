const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const contactSchema = new Schema({
    firstname: { type: String },
    lastname: { type: String, required: [true, 'Last name is required'] },
    email: { type: String, required: [true, 'email is required'] },
    creator: { type: String, required: true },
    createdbysfid: { type: String, required: true }
})
module.exports = mongoose.model('Contact', contactSchema);