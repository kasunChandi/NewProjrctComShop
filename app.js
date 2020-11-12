const express = require("express");
const cors = require("cors"); 
const mongoose = require("mongoose");
const DesktopPc = require("./routes/DesktopPc");
const LaptopPc = require("./routes/LaptopPc");
const user = require("./routes/user");
const app = express();
const port = 5000;


app.use(express.json());
app.use(cors());
app.use('/api/desktopPC', DesktopPc);
app.use('/api/laptopPc', LaptopPc);
app.use('/api/register', user);

mongoose
.connect("mongodb://localhost/ComputeShopDB",{useNewUrlParser:true , useUnifiedTopology: true})
.then(()=>console.log("connetion is success"))
.catch(err=> console.log("connection error ", err));



app.listen(port , function(){
console.log("Listening in port : " +port);
});