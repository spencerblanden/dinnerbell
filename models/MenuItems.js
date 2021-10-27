const mongoose = require('mongoose')
const Schema = mongoose.Schema


const MenuSchema = new Schema({
    name: String,
    image: String,
    rating: String,
    description: String, 
    rated: Boolean
  });
  
  const MenuItems = mongoose.model("MenuItems", MenuSchema);

  module.exports = MenuItems;