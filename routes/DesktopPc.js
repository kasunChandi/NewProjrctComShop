const express = require("express");
const router = express.Router();
const DesktopPc = require("../models/DesktopPCSchema");

router.post("/", async (req, res) => {
    if (!req.body.itemCode) {
      return res.status(400).send("Not all mandatory values have been set!");
    }
  
    try {
      let ItemToBeAdd = new DesktopPc({
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
     let itemList = await DesktopPc.find();
     res.send(itemList);
    }
     catch(e){
       return res.status(404).send(e.message);
     }
   });

   router.put( "/:itemid", async(req, res)=>{
     try {
       let upDesktop = await DesktopPc.findOneAndUpdate(
         {_id: req.params.itemid},
         { $set: { likeCount: req.body.likeCount } },
      { new: true, useFindAndModify: false }
       );

       res.send(upDesktop);
       
     } catch (e) {
       return res.status(500).send(e.message);
       
     }
   })




  module.exports = router;