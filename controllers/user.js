const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get("/", async (req, res) => {
    try {
      // send all menu
      res.json(await User.find());
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });

  router.put("/", async (req, res) => {
    console.log(req.body._id, req.body)
    try {
      // send all menu
      
        const user = await User.findById(req.body._id )
        user.favorites.push(req.body)
        await user.save()
      
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  })


module.exports = router;