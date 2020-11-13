const router = require("express").Router();
const user = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

router.post( "/", async(req, res) =>{
    const {email, password, passwordCheck} = req.body;
try{
    

    if(!email || !password ||  !passwordCheck)
    {
    return res.status(400).json({msg : "fealds are not fill"});
    }
    if( password.length < 5)
    {
        return res.status(400).json({msg : "password is short"});   
    }
    const existingUser = await user.findOne({email: email});
    if(existingUser){
        return res.status(400).send("this email alrady registed ");

    }
    
}
catch(e){
    res.send(500).json(e);
}
   

});

module.exports = router;