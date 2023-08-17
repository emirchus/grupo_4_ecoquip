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
        res.render('productDetail');
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
    }
}

module.exports = controller