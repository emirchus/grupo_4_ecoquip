const fs = require('fs');
const path = require('path');

let listaProductos = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/products.json'), 'utf-8'));


const controller = {
    home: (req, res) => {
        res.render('home');
    },
    login:  (req, res) => {
        res.render('login');
    },
    productCart:  (req, res) => {
        res.render('productCart');
    },
    productDetail:  (req, res) => {
        let productoEncontrado = listaProductos.find(( producto)=> producto.id == req.params.id)
    
        res.render('productDetail', {producto: productoEncontrado} );
    },
    register: (req, res) => {
        res.render('register');
    },
    header: (req, res) => {
        res.render('header');
    },
    header2: (req, res) => {
        res.render('header2');
    },
    productCreate: (req, res) => {
        res.render('productCreate');
    },
    productModify: (req, res) => {
        res.render('productModify');
    },

}

module.exports = controller