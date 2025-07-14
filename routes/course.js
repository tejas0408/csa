const {Router}= require("express");
const {usermiddleware} = require("../middlewares/user");
const { purchasemodel, coursemodel } = require("./db");
const courseRouter= Router();


courseRouter.post("/purchase",async function(req, res){
    const userId = req.userId;
    const courseId = req.body.courseId;

    await purchasemodel.create({
        userId,
        courseId
    })
    res.json({
        message: "signup endpoint"
    })
})

courseRouter.get("/preview",async function(req, res){
    const courses = await coursemodel.find({});
    res.json({
        message: "signin endpoint"
    })
})




module.exports={
    courseRouter:courseRouter
}