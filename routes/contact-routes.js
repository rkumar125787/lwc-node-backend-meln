const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact-controller')
router.post('/api/contacts/create', contactController.createContact);
router.delete('/api/contact/delete/:rid', contactController.deleteContacts);
router.get('/', contactController.getContacts);
module.exports = router;

