const mongoose = require('mongoose')
const Schema = mongoose.Schema


const CommentSchema = new Schema({
    comment: { 
        type: String,
        default: null
      },
    rating: { 
      type: Boolean,
      default: false 
    },
    menuItem: { 
        type: String,
        default: null
      },
  }, {timestamps:true})
  
  
  const UserDetailsSchema= new Schema({
      user: { 
        type: String,
        default: null
      },
      details: [CommentSchema]
  })
   

  const UserDetails= mongoose.model("UserDetails", UserDetailsSchema)

  module.exports= UserDetails;