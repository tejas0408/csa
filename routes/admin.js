const {Router}= require("express");
const adminRouter= Router();
const{adminmodel} = require("../db");
const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD=("tejas0408");

adminRouter.post("/signup",async function(req, res){
     const {email, password, firstName, lastName} = req.body;

 await   adminmodel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post("/signin", function(req, res){
    const {email, password} = req.body;
    const user = adminmodel.findOne({
        email: email,
        password: password
    });
    if (admin){
        const token = jwt.sign({
                   id: user._id

        }, JWT_ADMIN_PASSWORD);

        res.json({
            token: token
        })
    }else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }

})

adminRouter.post("/course", function(req, res){
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.put("/course", function(req, res){
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.get("/course/bulk", function(req, res){
    res.json({
        message: "signin endpoint"
    })
})

module.exports= {
    adminRouter:adminRouter
}
