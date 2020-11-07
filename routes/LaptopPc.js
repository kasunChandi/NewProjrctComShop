const express = require("express");
const router = express.Router();
const Laptop = require("../models/LaptopPCSchema");

router.post("/", async (req, res) => {
    if (!req.body.itemCode) {
      return res.status(400).send("Not all mandatory values have been set!");
    }
  
    try {
      let ItemToBeAdd = new Laptop({
        itemCode: req.body.itemCode,
        itemName: req.body.itemName,
        stock: req.body.stock,
        itemDescription: req.body.itemDescription,
        imgUrl: req.body.imgUrl,
        itemQty: req.body.itemQty,
        itemPrice: req.body.itemPrice,
        warranty:req.body.warranty,
        likeCount: req.body.likeCount,
      });
  
      ItemToBeAdd = await ItemToBeAdd.save();
      res.send(ItemToBeAdd);
    } catch (e) {
      return res.status(500).send(e.message);
    }
  });

  router.get("/", async (req, res) => {
    try{
     let itemList = await Laptop.find();
     res.send(itemList);
    }
     catch(e){
       return res.status(404).send(e.message);
     }
   });




  module.exports = router;