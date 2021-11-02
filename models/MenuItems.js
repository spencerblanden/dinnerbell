const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: String,
  createdBy: String
}, {timestamps:true})


const MenuSchema = new Schema({
    name: String,
    image: String,
    description: String, 
    itemType: String,
    // comments: [commentSchema],
    rating: { 
      type: Boolean,
      default: false 
    }
  });

  
  
  const MenuItems = mongoose.model("MenuItems", MenuSchema);

  module.exports = MenuItems;