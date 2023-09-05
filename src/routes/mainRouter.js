const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')

router.get("/", mainController.home);
router.get("/login", mainController.login);
router.get("/productCart", mainController.productCart);
router.get("/productDetail/:id", mainController.productDetail);
router.get("/register", mainController.register);
router.get("/header", mainController.header);
router.get("/header2", mainController.header2);
router.get("/productCreate", mainController.productCreate);
router.get("/productModify/:id", mainController.productModify);

router.post("/productCreate", mainController.productCreateProcess);
router.put("/productModify/:id", mainController.productModifyProcess);
router.delete("/productDelete/:id", mainController.productDelete);
router.put("/productAlta/:id", mainController.recuperarProcess);


module.exports = router