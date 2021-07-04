const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const accountController = require('../controllers/account-controller');
router.get('/', (req, res, next) => {
    res.status(200).send({ status: 'OK' })
})
router.post('/', [check('name').not().isEmpty(), check('address').not().isEmpty()], accountController.createAccount);
module.exports = router;