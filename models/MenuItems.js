const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CommentSchema = new Schema({
  comment: { 
      type: String,
      default: null
    },
  rating: Boolean,
   
  menuItem: String
      
}, {timestamps:true})



const MenuSchema = new Schema({
    name: String,
    image: String,
    description: String, 
    itemType: String,
    managedBy: String
  });

  
  
  const MenuItems = mongoose.model("MenuItems", MenuSchema);

  module.exports = MenuItems;