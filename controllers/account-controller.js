const createAccount = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ error: 'error occured' });
    }
    const { name, address } = req.body;
    console.log('req.body' + JSON.stringify(req.body));
    res.json({ detail: req.body });
}

exports.createAccount = createAccount;