const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CommentSchema = new Schema({
  comment: String,
  rating: { 
    type: Boolean,
    default: false 
  },
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
    comments: [CommentSchema],
    rating: { 
      type: Boolean,
      default: false 
    },
    // managedBy: String
  });

  const UserDetails= mongoose.model("UserDetails", UserDetailsSchema)
  
  const MenuItems = mongoose.model("MenuItems", MenuSchema);

  module.exports = MenuItems, UserDetails;