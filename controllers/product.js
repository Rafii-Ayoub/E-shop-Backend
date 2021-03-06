function createProduct(req, res) {
    let Product = require('../models/product');
    let newProduct = Product ({
        name: req.body.name,
        description : req.body.description,
        price : req.body.price
    });

    newProduct.save()
    .then((savedProduct) => {

        //send back the created Product
        res.json(savedProduct);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readProducts(req, res) {

    let Product = require("../models/product");

    console.log("Look to the products of this shop")

    Product.find({})
    .then((products) => {
        res.status(200).json(products);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function readProduct(req, res) {

    let Product = require("../models/product");

    Product.findById({_id : req.params.id})
    .then((product) => {
        res.status(200).json(product);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function updateProduct(req, res){

    let Product = require("../models/product");

    Product.findByIdAndUpdate({_id: req.params.id}, 
        {name : req.body.name, 
        description : req.body.descrption,
        price: req.body.price}, 
        {new : true})
    .then((updatedProduct) => {
        res.status(200).json(updatedProduct);
    }, (err) => {
        res.status(500).json(err);
    });
 }

 function deleteProduct(req, res){

    let Product = require("../models/product");

    Product.findOneAndRemove({_id : req.params.id})
    .then((deletedProduct) => {
        res.status(200).json(deletedProduct);
    }, (err) => {
        res.status(500).json(err);
    });

 }

module.exports.reads = readProducts;
module.exports.create = createProduct;
module.exports.read = readProduct;
module.exports.update = updateProduct;
module.exports.delete = deleteProduct;