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


const UserDetailsSchema= new Schema({
    user: { 
      type: String,
      default: null
    },
    details: [CommentSchema]
})

const MenuSchema = new Schema({
    name: String,
    image: String,
    description: String, 
    itemType: String,
    rating: { 
      user: String,
      type: Boolean 
    },
    managedBy: String
  });

  
  
  const MenuItems = mongoose.model("MenuItems", MenuSchema);

  module.exports = MenuItems;