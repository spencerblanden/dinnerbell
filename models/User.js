const mongoose = require('mongoose')
const Schema = mongoose.Schema



  
  
  const UserDetailsSchema= new Schema({
      user: { 
        type: String,
        default: null
      },
      favorites: [String]
  })
   

  const UserDetails= mongoose.model("UserDetails", UserDetailsSchema)

  module.exports= UserDetails;