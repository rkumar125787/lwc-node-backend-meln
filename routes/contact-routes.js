const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact-controller')
router.post('/create', contactController.createContact);
router.get('/', contactController.getContacts);
module.exports = router;

