const jwt = require("jsonwebtoken");

const auth = (req, res, next)=>{

try {
    const token = req.header("x-auth");
    
    if(!token){
        return res
        .status(401)
        .json({msg : "user is not autherrized "});
    }
        const verified = jwt.verify(token, process.env.JWTSC);
      //  console.log(verified);
        if(!verified){
            return res.status(401).json({msg : " autherrized faild "});
        }
      
      console.log(verified.id);
      req.user = verified.id;
      next();
    
} catch (error) {
    
}

    
};

module.exports = auth;