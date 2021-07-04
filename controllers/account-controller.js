const createAccount = (req, res, next) => {
    const { name, address } = req.body;
    res.status('200').send({ name: name, address: address });
}

exports.createAccount = createAccount;