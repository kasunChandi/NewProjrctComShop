const router = require("express").Router();
const user = require("../models/userSchema");

router.post( "/", async(req, res) =>{
    const {email, password, passwordCheck} = req.body;
try{
    

    if(!email || !password ||  !passwordCheck)
    {
    return res.status(400).json({msg : "fealds are not fill"});
    }
 /*    if( password.length < 5)
    {
        return res.status(400).json({msg : "password is short"});   
    } */
    return res.status(200).json({msg : "ok"}); 
}
catch(e){
    res.send(500).json(e);
}
   

});

module.exports = router;