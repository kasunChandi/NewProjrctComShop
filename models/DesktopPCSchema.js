const mongoose = require("mongoose");

const desktopPcSchema = new mongoose.Schema({

    imgUrl: {
        type: String,
        required: true,
      },
      itemName: {
        type: String,
        minlength: 2,
        maxlength: 200,
        required: true,
      },
      itemPrice:{
        type: Number,
        required: true,
      },
      itemDescription: {
        type: String,
        maxlength: 300,
        required: true,
      },
      itemCode: {
        type: String,
        maxlength :5,
        minlength :4,
        required :true
      },
      warranty: {
        type: String,
        required: true,
      },
      itemQty: {
        type: Number,
        required: true,
      },
      stock: {
        type: String,
        required: true,
      },
      likeCount: 
      {
        type: Number,
        required: true,
      }
});

const DesktopPcData = mongoose.model("DesktopPcData" , desktopPcSchema);
module.exports = DesktopPcData;