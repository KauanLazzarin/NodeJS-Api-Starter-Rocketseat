const requireDir = require('require-dir');
const mongoose = require('mongoose');
requireDir('../models');

const Product = mongoose.model('Product')

// criar novo produto
async function createProduct (req, res) {
    try {
        const product = await Product.create(req.body);
        return res.json(product)
    } catch (error) {
        console.error(error)
    }
};

// mostrar (todos) produtos
async function indexAllProducts (req, res) {
    try {
        const products = await Product.find()
        console.log('todos os arquivos listados!')
        return res.json(products)
    } catch (error) {
        return console.error(error)
    }
};

//mostrar produto pelo id
async function indexProductById (req,res) {
    try {
        const product = await Product.findById(req.params.id);
        return res.json(product)
    } catch (error) {
        return console.error(error)
    }
};

async function deleteProductById (req,res) {
    try {
        await Product.findByIdAndDelete(req.params.id);
        return res.send('Deletado com sucesso!')
    } catch (error) {
        return console.error(error)
    }
};

async function updateProducts (req, res) {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true})
        return res.json(updatedProduct)
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    createProduct, 
    indexAllProducts, 
    indexProductById, 
    deleteProductById, 
    updateProducts
};
