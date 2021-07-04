const express = require('express');
const port = 5000;
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.use(bodyParser.json());

// app.use('/api/accounts', accountsRoute);

app.get('/', (req, res, next) => {
    res.status(200).send({ status: `tested` });
})
// app.listen(process.env.PORT || port, (req, res, next) => {
//     console.log('listening on port')
// })
mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.wpbzh.mongodb.net/sfdc?retryWrites=true&w=majority`).
    then(() => {
        app.listen(process.env.PORT || port);
        console.log('listening')
    }).
    catch(
        err => {
            console.log(err);
        }
    )