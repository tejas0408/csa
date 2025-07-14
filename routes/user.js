const {Router}= require("express");
const userRouter= Router();
const jwt = require("jsonwebtoken");
const { usermodel, purchasemodel } = require("./db");
const{JWT_USER_PASSWORD}= require("../config");

userRouter.post("/signup", function(req, res){
    const {email, password, firstName, lastName} = req.body;

    usermodel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })
    res.json({
        message: "signup endpoint"
    })
})

userRouter.post("/signin",async function(req, res){
    const {email, password} = req.body;
    const user = usermodel.findOne({
        email: email,
        password: password
    });
    if (user){
        const token = jwt.sign({
                   id: user._id

        }, JWT_USER_PASSWORD);

        res.json({
            token: token
        })
    }else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }

    
 })


userRouter.get("/purchases", async function(req, res){
    const userID= req.userID;
  const purchases=   await purchasemodel.find({
        userID,
        courseId
    })
    

    res.json({
        message: "signup endpoint"
    })
})


module.exports ={
    userRouter: userRouter
}