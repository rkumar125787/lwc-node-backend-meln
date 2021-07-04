const express = require('express');
const port = 5000;
const app = express();

app.get('/', (req, res, next) => {
    res.status(200).send({ status: `tested` });
})
app.listen(process.env.PORT || port, (req, res, next) => {
    console.log('listening on port')
})