const jwt= require("jsonwebtoken");
const {JWT_USER_PASSWORD}= require("../config");

function usermiddleware(req, res,next){
    const token = req.headers.token;
    const decoded = jwt.verify(token,JWT_USER_PASSWORD)

    if (decoded){
        req.userId= decoded.indexOf;
        next()
    }else{
        res.status(403).json({
            message: "you are not signed in"
        })
    }
}

module.exports={
    usermiddleware: usermiddleware
    
}