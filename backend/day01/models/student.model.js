import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        maxLength: 20,
        minLength: 4,
        required: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [3, "Password must be at least 8 characters"]
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    age: {
        type: String,
        min: 18,
        max: 50
    },
    gender: {
        type: String,
        enum: ["Male", "Female"]
    },
    skills: {
        type: []
    },
    status: {
        type: Boolean,
        default: true
    },
});


const studentModel = mongoose.model("students", studentSchema);

export default studentModel;