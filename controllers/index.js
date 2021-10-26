const express = require('express');
const router = express.Router();
const MenuItems = require('../models/MenuItems');


router.get('/', (req,res) => {
    res.send('hello world')
})

router.get("/menu", async (req, res) => {
    try {
      // send all menu
      res.json(await MenuItems.find({}));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });
  
// menu DELETE ROUTE
router.delete("/menu/:id", async (req, res) => {
    try {
      // send all menu
      res.json(await MenuItems.findByIdAndDelete(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });
  
  // menu UPDATE ROUTE
  router.put("/menu/:id", async (req, res) => {
    try {
      // send all menu
      res.json(
        await MenuItems.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  })
  // menu CREATE ROUTE
  router.post("/menu", async (req, res) => {
    try {
      // send all menu
      res.json(await MenuItems.create(req.body));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });
  

module.exports = router;