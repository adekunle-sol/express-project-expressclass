
//controller
const home = (req, res) => {
    res.sendFile('/index.html', { root: './views' });
}

const add_to_cart = (req, res) => {
    res.send('Data added to cart!');
}

const contact = (req, res) => {
    res.sendFile('/contact.html', { root: './views' });
}

const post = (req, res) => {
    res.send('Data added to cart!');
}

const about = (req, res) => {
    res.sendFile('/about.html', { root: './views' });
}

module.exports = {
    home,
    add_to_cart,
    contact,
    post,
    about
}