const createAccount = (req, res, next) => {
    const { name, address } = req.body;
    console.log('req.body' + JSON.stringify(req.body));
    res.json({ detail: req.body });
}

exports.createAccount = createAccount;