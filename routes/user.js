const router = require("express").Router();
const auth = require("../midleware/auth");
const User = require("../models/userSchema");
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
    const existingUser = await User.findOne({email: email});
    if(existingUser){
        return res.status(400).send("this email alrady registed ");

    }
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    
    console.log(passwordHash);

    const newUser = new User({
        email,
        password: passwordHash

    });
    const saveUser = await newUser.save();
    res.send(saveUser);
    
}
catch(e){
    res.send(500).json(e);
}
   

});

router.post('/login', async(req, res)=>{
try {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(400).send("Missing passwerd or username..");
    }
    const user = await User.findOne({email: email});
    if (!user)
    {
        return res.status(400).send("this account is not register..")
    }
    const matUser = await bcrypt.compare(password, user.password);
    if(!matUser){
        return res.status(400).send("this account is not autherrized...")
    }

    const token =jsonwebtoken.sign({id: user._id}, process.env.JWTSC);
    res.json({
        token,
        user:{
            id:   user._id,
            email: user.email,
        },
    });
} 
catch (e) {
    res.status(500).send("error :" +e);
}

});

router.delete("/delete", auth, async(req, res)=>{
try {
    const deleteUser = await User.findByIdAndDelete(req.user);
    res.json(deleteUser);
} catch (e) {
    res.status(500).send("error :" +e);
}

});


module.exports = router;