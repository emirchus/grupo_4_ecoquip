const express = require("express");
const router = express.Router();
const path = require("path");

const viewPath = path.resolve(__dirname, "..", "views", "cart.html");

router.get("/", (req, res) => {
  res.sendFile(viewPath);
});

module.exports = router;