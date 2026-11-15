import mongoose from "mongoose";
import express from "express";
import studentModel from "./models/student.model.js";
const server = express();
server.use(express.json())

//complete api path-http://localhost:5000/student/create


server.post("/student/create", async (req, res) => {
    try {

        const student = await studentModel.findOne({ email: req.body.email });
        if (student) {
            return res.status(409).json({
                msg: "Student Email Already Exist",
                success: false
            })
        }

        await studentModel.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            age: req.body.age,
            gender: req.body.gender,
            skills: req.body.skills
        })
        res.status(201).json({
            msg: "Student Accound Create",
            success: true
        })

    } catch (error) {
        res.status(500).json({
            msg: error.message || "Internal Server Error",
            success: false
        })
    }
})




server.get("/students", async (req, res) => {
    try {
        const students = await studentModel.find();
        const total_student = await studentModel.find().countDocuments();
        res.status(200).json({
            msg: "Student Fetched Successfully",
            success: true,
            students: students,
            total: total_student
        })
    } catch (error) {
        res.status(500).json({
            msg: error.message || "Internal Server Error",
            success: false
        })
    }
})


server.delete("/student/delete/:id", async (req, res) => {
    try {
        const studentId = req.params.id;
        const student = await studentModel.findById(studentId);
        if (!student) {
            return res.status(404).json({
                msg: "Student Data Not Found",
                success: false
            })
        }

        await studentModel.deleteOne({ _id: studentId });
        res.status(200).json({
            msg: "Student Accound Delete Successfully",
            success: true
        })


    } catch (error) {
        res.status(500).json({
            msg: error.message || "Internal Server Error",
            success: false
        })
    }
})


server.patch("/student/status-update/:id", async (req, res) => {
    try {
        const studentId = req.params.id;
        const student = await studentModel.findById(studentId);
        if (!student) {
            return res.status(404).json({
                msg: "Student Data Not Found",
                success: false
            })
        }

        await studentModel.updateOne(
            { _id: studentId },
            { $set: { status: !student.status } }
        )
        res.status(200).json({
            msg: "Student  Status Update Successfully",
            success: true
        })




    } catch (error) {
        res.status(500).json({
            msg: error.message || "Internal Server Error",
            success: false
        })
    }
})


server.put("/student/update/:id", async (req, res) => {
    try {
        const studentId = req.params.id;
        const student = await studentModel.findById(studentId);
        if (!student) {
            return res.status(404).json({
                msg: "Student Data Not Found",
                success: false
            })
        }

        await studentModel.updateOne(
            { _id: studentId },
            { $set: req.body }
        )

        res.status(200).json({
            msg: "Student Update Successfully",
            success: true
        })


    } catch (error) {
        res.status(500).json({
            msg: error.message || "Internal Server Error",
            success: false
        })
    }
})



server.listen("5000", () => {
    console.log("Server is running at port number 5000")
})


mongoose.connect("mongodb://localhost:27017/collage").then(() => {
    console.log("Database is connect")
}).catch(() => {
    console.log("Database is not connected")
})






