const express = require('express');
const routes = express.Router();
const productControllers = require('./controllers/product-controller.js');

// mostrar todos os produtos
routes.get('/products', productControllers.indexAllProducts);

// mostrar produto pelo id 
routes.get('/products/:id', productControllers.indexProductById)

// criar um novo produto
routes.post('/createproduct', productControllers.createProduct);

// atualizar um produto
routes.put('/updateproduct/:id', productControllers.updateProducts);

// deletar um produto pelo id
routes.delete('/deleteproduct/:id', productControllers.deleteProductById);

module.exports = routes;