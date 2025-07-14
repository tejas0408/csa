const {Router}= require("express");
const adminRouter= Router();
const{adminmodel} = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");
const { adminmiddleware } = require("../middlewares/admin");
const { coursemodel } = require("./db");
const { title } = require("process");


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

adminRouter.post("/course",adminmiddleware, async function(req, res){
    const adminId= req.userId;
    const {title, description, imageurl, price} = req.body;

 const course=   await coursemodel.create({
        title: title,
         description: description,
         imageurl: imageurl,
         price: price,
          creatorId: adminId

    })
    res.json({
        message: "signup endpoint"
    })
})

adminRouter.put("/course",async function(req, res){
     const adminId= req.userId;
     const courseId= req.userId;
    const {title, description, imageurl, price} = req.body;

 const course=   await coursemodel.updateOne({
         _id: courseId,
         creatorId: adminId
 }, {
        title: title,
         description: description,
         imageurl: imageurl,
         price: price,
         creatorId: adminId

    })
    res.json({
        message: "Course upadated",
        courseId: course._id
    })

    res.json({
        message: "signup endpoint"
    })
})

adminRouter.get("/course/bulk",adminmiddleware,async function(req, res){
   const adminId= req.userId;
   const courses= await coursemodel.find({
    creatorId: adminId
   },{
    title: title,
    description: description,
    imageurl: imageurl,
    price: price

   });
   res.json({
    message: "Course updated",
    courses 
   })


})

module.exports= {
    adminRouter:adminRouter
}
