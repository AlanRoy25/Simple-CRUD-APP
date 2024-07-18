// this is used for routing between different products and using the CRUD app.

const express = require('express')
const router = express.Router();
const product = require('./product.route.js')
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require("../controllers/product.controller.js")

router.get("/", getProducts) // this is for getiing all the products
router.get("/:id", getProduct) // getting individual product

router.post("/", createProduct) // creating a new product
router.put("/:id", updateProduct) //updating the old product based on id
router.delete("/:id", deleteProduct) //deleitng the product completely

module.exports = router; // for exporting the module router.