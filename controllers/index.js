const express = require('express');
const router = express.Router();
const MenuItems = require('../models/MenuItems');

router.get('/', async (req, res) => {
  try {
      res.json(await Contact.find({managedBy: req.user.uid}));
  } catch (error) {
      res.status(401).json({message: 'Please login to see contacts'});
  }
});


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
  router.put("/menu", async (req, res) => {
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

  // router.post('/menu/:id/comments', async (req,res) => {
  //   try {
  //     const dish = await MenuItems.findById(req.params.id);
  //     dish.comments.push(req.body) 
  //     await dish.save()
  //     res.json(dish)
  //   } catch (error) {
  //     res.status(401).json({message: 'sorry something went wrong'})
  //   }
  // })
  

module.exports = router;