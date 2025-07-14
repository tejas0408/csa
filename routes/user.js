const {Router}= require("express");
const userRouter= Router();


userRouter.post("/signup", function(req, res){
    const {email, password, firstName, lastName} = req.body;

    userModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })
    res.json({
        message: "signup endpoint"
    })
})

userRouter.post("/signin", function(req, res){
    res.json({
        message: "signin endpoint"
    })
})

userRouter.get("/purchases", function(req, res){
    res.json({
        message: "signup endpoint"
    })
})


module.exports ={
    userRouter: userRouter
}