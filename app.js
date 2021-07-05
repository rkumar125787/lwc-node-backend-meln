const express = require('express');
const dotenv = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const accountRoutes = require('./routes/account-routes');
const contactRoutes = require('./routes/contact-routes');
const HttpError = require('./models/http-error');


dotenv.config();
app.use(bodyParser.json());


// app.use('/', accountRoutes);
app.use('/', contactRoutes)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // setting origin to allow from browser
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type ,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
})
app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
});

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occurred!' });
});
mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.wpbzh.mongodb.net/sfdc?retryWrites=true&w=majority`).
    then(() => {
        app.listen(process.env.PORT || port); // start server
        console.log('listening')
    }).
    catch(
        err => {
            console.log(`error->` + JSON.stringify(err));
        }
    )