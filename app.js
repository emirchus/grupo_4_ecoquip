const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3001, () => console.log("servidor 3001 funcionando"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/productDetail.html"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/productCart.html"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/register.html"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/login.html"));