const Contact = require('../models/contact');
const HttpError = require('../models/http-error');

const createContact = async (req, res, next) => {
    const { firstname, lastname, email, creator, createdbysfid } = req.body;
    const contact = new Contact({ firstname, lastname, email, creator, createdbysfid });
    let newContact;
    try {
        newContact = await contact.save()
    }
    catch (er) {
        return next(new HttpError(`Contact creation failed with error ${JSON.stringify(er.message)}`, 500));
    }
    res.status(201).json({ contact: newContact.toObject({ getters: true }) });
}
const getContacts = async (req, res, next) => {
    let contacts;
    try {
        contacts = await Contact.find();
    }
    catch (er) {
        return next(new HttpError(`Contact fetch failed ${JSON.stringify(er.message)}`, 500));
    }
    res.status(200).json({ contacts: contacts.map(contact => contact.toObject({ getters: true })) });
}

const deleteContacts = async (req, res, next) => {
    const rid = req.params.rid;
    res.json({ rid: rid });
}
exports.createContact = createContact;
exports.getContacts = getContacts;
exports.deleteContacts = deleteContacts;