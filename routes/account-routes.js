const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const accountController = require('../controllers/account-controller');
router.get('/', accountController.getAccount);
router.post('/api/accounts', [check('name').not().isEmpty(), check('address').not().isEmpty()], accountController.createAccount);
module.exports = router;