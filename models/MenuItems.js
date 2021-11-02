const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  content: String,
  rating: String,
  menuItem: String
}, {timestamps:true})


const UserDetailsSchema= new Schema({
    user: String,
    details: [CommentSchema]
})
 


const MenuSchema = new Schema({
    name: String,
    image: String,
    description: String, 
    itemType: String,
    // comments: [commentSchema],
    rating: { 
      type: Boolean,
      default: false 
    },
    // managedBy: String
  });

  const UserDetails= mongoose.model("UserDetails", UserDetailsSchema)
  
  const MenuItems = mongoose.model("MenuItems", MenuSchema);

  module.exports = MenuItems, UserDetails;