const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact-controller')
router.post('/api/contacts/create', contactController.createContact);
router.get('/', contactController.getContacts);
router.delete('/api/contact/:rid', contactController.deleteContacts);
module.exports = router;
