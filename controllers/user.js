const express = require('express');
const router = express.Router();
const UserDetails = require('../models/User');

router.get("/", async (req, res) => {
    try {
      // send all menu
      res.json(await UserDetails.find());
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });

  router.put("/", async (req, res) => {
    console.log(req.body.person, req.body.ind)
    // if (UserDetails.findById(req.body) == false) {
    //     create()
    // }
    
    try {
      // send all menu
        const user = await UserDetails.findById(req.body.person)
        
        await user.favorites.push(req.body.ind.menuItem)
        await user.save()
      
    } catch (error) {
      console.log(error)
      res.status(400).json(error);
    }
  })


module.exports = router;