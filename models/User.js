const mongoose = require('mongoose')
const Schema = mongoose.Schema


const RatingSchema = new Schema({

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
      favorites: [RatingSchema]
  })
   

  const UserDetails= mongoose.model("UserDetails", UserDetailsSchema)

  module.exports= UserDetails;