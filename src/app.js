const express = require("express");
const app = express();
const path = require("path");

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(3001, () => console.log("servidor 3001 funcionando"));

app.get("/", (req, res) => {
  res.render('home');
});

app.get("/login", (req, res) => {
  res.render('login');
});

app.get("/productCart", (req, res) => {
  res.render('productCart');
});

app.get("/productDetail", (req, res) => {
  res.render('productDetail');
});

app.get("/register", (req, res) => {
  res.render('register');
});

app.get("/header", (req, res) => {
  res.render('header');
});

app.get("/header2", (req, res) => {
  res.render('header2');
});

