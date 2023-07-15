const express = require("express");
const app = express();

const path = require("path");

const { env } = require("process");

const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

// const homeRoute = require("./routes/home");
// app.use("/", homeRoute);

// const signInRoute = require("./routes/signin");
// app.use("/signin", signInRoute);

// const signUpRoute = require("./routes/signup");
// app.use("/signup", signUpRoute);

// const cartRoute = require("./routes/cart");
// app.use("/cart", cartRoute);

// const productRoute = require("./routes/product");
// app.use("/product", productRoute);

const fs = require("fs");

const routesPath = path.resolve(__dirname, "routes");

const routes = fs.readdirSync(routesPath);

routes.forEach((route) => {
  const routePath = path.resolve(__dirname, "routes", route);
  app.use(`/${route.split`.`[0]}`, require(routePath));
});

app.listen(env.PORT || 3000, () =>
  console.log(`Servidor levantado en puerto ${env.PORT || 3000} 🚀`)
);
