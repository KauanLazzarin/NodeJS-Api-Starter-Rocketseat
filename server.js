const express = require('express');
const mongoose = require('mongoose');
const server = express();
server.use(express.json())

mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});


server.use('/api', require('./src/routes.js'));
server.listen(3003, console.log('Servidor rodando na porta 3003'));