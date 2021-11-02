const mongoose = require('mongoose')
const Schema = mongoose.Schema




const MenuSchema = new Schema({
    name: String,
    image: String,
    description: String, 
    itemType: String,
    rating: { 
      type: Boolean,
      default: false 
    },
    managedBy: String
  });

  
  
  const MenuItems = mongoose.model("MenuItems", MenuSchema);

  module.exports = MenuItems;