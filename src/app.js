const express = require("express");
const app = express();
const mainRouter = require('./routes/mainRouter')
const path = require("path");

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(3001, () => console.log("servidor 3001 funcionando"));

app.use(mainRouter)













