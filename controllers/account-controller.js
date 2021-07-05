
const Account = require('../models/account');
const HttpError = require('../models/http-error');

const createAccount = async (req, res, next) => {
    const { name, address } = req.body;
    const createdAccount = new Account({ name: name, address: address });
    let result;
    try {
        result = await createdAccount.save();
    }
    catch (e) {
        const err = new HttpError(`Account can't be created` + JSON.stringify(e.message), 402);
        return next(err);
    }
    res.status(201).send({ account: createdAccount.toObject({ getters: true }) });
}

const getAccount = async (req, res, next) => {
    let accounts;
    try {
        accounts = await Account.find();
    }
    catch (e) {
        return next(new HttpError(`Issue fetching place`, 401));
    }
    res.status(201).json({ accounts: accounts.map(account => account.toObject({ getters: true })) });
}
exports.createAccount = createAccount;
exports.getAccount = getAccount;