const express = require('express');
const port = 5000;
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const accountRoutes = require('./routes/account-routes');
app.use(bodyParser.json());

// app.use('/api/accounts', accountsRoute);

app.use('/', accountRoutes);
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