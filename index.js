const express = require ("express");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user");
const { courseRouter} = require("./routes/course");
const { adminRouter } = require("./routes/admin");


const app= express();
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course",courseRouter);

createUserRoutex(app);
createCourseRoutes(app);

async function main(){
    await mongoose.connect("mongodb+srv://tsaini0408:7KBdPa6TwaTSwqsd@cluster0.liy9kjj.mongodb.net/");
    app.listen(3000);
    console.log("listning to port 3000");
}
