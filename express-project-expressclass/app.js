const express = require('express');
const path = require('path');
const routes = require('./routes/index.js');
const mongoose = require('mongoose');

const app = express();

app.use(express.static('public'));

app.use((req, res, next) => {
    console.log(req.hostname);
    console.log(req.method);
    console.log(req.url);

    next();
});

//middleware - entry-point
app.use('/cart', routes);

app.use((req, res) => {
    res.sendFile('/404.html', { root: './views' });
});

const PORT = 5000;

const CONNECTION_URI = 'mongodb+srv://mongodbclass:mongodb@cluster0.vufqv.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen((PORT), () => console.log(`Server listening on PORT ${PORT}`)))
    .catch((err) => console.error(err));        