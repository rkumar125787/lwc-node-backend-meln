
const createAccount = (req, res, next) => {
    const { name, address } = req.body;
    res.json({ name: name, address: address });
}

exports.createAccount = createAccount;