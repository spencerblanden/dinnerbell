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
   

  const UserDetails= mongoose.model("UserDetails", UserDetailsSchema)

  module.exports= UserDetails;