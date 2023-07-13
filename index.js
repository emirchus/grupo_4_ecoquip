const express = require("express");
const app = express();

const path = require("path");

const { env } = require("process");

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

const signInRoute = require("./routes/signin");

app.use("/signin", signInRoute);

app.listen(env.PORT || 3000, () =>
  console.log(`Servidor levantado en puerto ${env.PORT || 3000} 🚀`)
);
