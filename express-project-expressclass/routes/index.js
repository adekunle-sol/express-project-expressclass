const express = require('express');
const { home, add_to_cart, contact, about, post } = require('../controller');

const routes = express.Router();

//routes
routes.get('/', home);
routes.get('/about', about);
routes.get('/contact', contact);
routes.get('/add_to_cart', add_to_cart);
routes.post('/post', post);

const delete_cart = (req, res) => {
    res.send('Deleting data');
}

routes.get('/delete', delete_cart);

module.exports = routes;