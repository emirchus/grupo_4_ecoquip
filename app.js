const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3001, () => console.log("servidor 3001 funcionando"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.get("/productCart", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/productCart.html"));
});

app.get("/productDetail", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/productDetail.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.get("/header", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/header.html"));
});

app.get("/header2", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/header2.html"));
});
