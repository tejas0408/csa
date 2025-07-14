const mongoose= require("mongoose");

const Schema = mongoose.Schema;
const ObjectId= mongoose.Types.ObjectId;

const userSchema= Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String,
    
});

const adminSchema=Schema({
    email: {type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String,

});

const courseSchema=Schema({
    title: String,
    description: String,
    price:Number,
    imageUrl: String,
    creatorId: ObjectId

});

const purchaseSchema=Schema({
    userId: ObjectId,
    courseId: ObjectId

});

const usermodel=mongoose.model("user",userSchema);
const adminmodel=mongoose.model("admin",userSchema);
const coursemodel=mongoose.model("course",userSchema);
const purchasemodel=mongoose.model("purchase",userSchema);

module.exports ={
    usermodel,
    adminmodel,
    coursemodel,
    purchasemodel
}




