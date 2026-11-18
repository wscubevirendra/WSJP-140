import mongoose from "mongoose";
import express from "express";
import studentRouter from "./routers/student.router.js";
const server = express();
server.use(express.json())
server.use("/student", studentRouter)


//complete api path-http://localhost:5000/student/create

server.listen("5000", () => {
    console.log("Server is running at port number 5000")
})


mongoose.connect("mongodb://localhost:27017/collage").then(() => {
    console.log("Database is connect")
}).catch(() => {
    console.log("Database is not connected")
})






