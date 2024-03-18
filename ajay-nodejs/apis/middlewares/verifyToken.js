const jwt = require("jsonwebtoken")

const verifyToken=(req,res,next)=>{
    let tokenWithBearer=req.headers["authorization"]
    
    if(!tokenWithBearer){
        res.send({
            message:"Unauthorised access..try to re login"
        })
    }
    if(tokenWithBearer.startsWith("Bearer ")){
        let token=tokenWithBearer.slice(7,tokenWithBearer.length);
        jwt.verify(token,"abcd",(err,decoded)=>{
            if(err){
                res.send({
                    mesaage:"session expired"
                })
            }
            else{
                console.log(decoded)
                next();
            }
        })
    }
}

module.exports = verifyToken;