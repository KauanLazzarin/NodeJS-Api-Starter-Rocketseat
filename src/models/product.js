// Criando o model do produto usando padrão MVC

const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  
  description: {
    type: String,
    required: true
  },
  
  url: {
    type: String,
    required: true
  },
  
  createdAt: {
    type: Date,
    default: Date.now
  }
});

autoIncrement.initialize(mongoose.connection);
ProductSchema.plugin(autoIncrement.plugin, 'Counter');
mongoose.model('Product', ProductSchema);
