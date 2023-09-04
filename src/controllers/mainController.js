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
        let productoEncontrado = listaProductos.find(( producto)=> producto.id == req.params.id)
        res.render('productModify', {producto: productoEncontrado})
    },
    
    productCreateProcess:(req, res)=>{
        let productoNuevo = {
            "id":listaProductos.length + 1,
            "name":req.body.nombre,
            "category":req.body.categoria,
            /*"image":req.body.imagen_principal,
            "image2":req.body.imagen_color1,
            "image3":req.body.imagen_color2,
            "image4":req.body.imagen_color3,*/
            "description":req.body.descripcion,
            "price":req.body.precio,
            "deleted":false
        };
        listaProductos.push(productoNuevo);
        fs.writeFileSync(path.join(__dirname, '../data/products.json'),JSON.stringify(listaProductos, null,2), 'utf-8')
        res.redirect('/')
    },
    productModifyProcess: (req, res) => {
        let productoEncontrado = listaProductos.find(( producto)=> producto.id == req.params.id)

        productoEncontrado.name = req.body.nombre;
        productoEncontrado.category = req.body.categoria;
        productoEncontrado.description = req.body.descripcion;
        productoEncontrado.price = req.body.precio;
        
        fs.writeFileSync(path.join(__dirname, '../data/products.json'), JSON.stringify(listaProductos, null, 2), 'utf-8')

        res.render('productModify', {producto: productoEncontrado})
    },
    
}

module.exports = controller