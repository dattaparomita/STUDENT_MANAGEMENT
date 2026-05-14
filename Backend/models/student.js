import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },

    Email: {
        type: String,
        required: true
    },

    Age: {
        type: Number,
        required: true
    },

    Course: {
        type: String,
        required: true
    },
})

const student = mongoose.model("Student", studentSchema)

export default student