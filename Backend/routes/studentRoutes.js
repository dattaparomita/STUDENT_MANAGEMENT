import express from "express";
import Student from "../models/Student.js";

const router = express.Router();

// ADD STUDENT

router.post("/", async (req, res) => {

    try {

        const student = new Student(req.body);
        console.log(req.body)

        await student.save();

        res.status(201).json(student);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

// Get single student

router.get("/:id", async (req, res) => {

    try {

        const student = await Student.findById(
            req.params.id
        )

        res.json(student)

    } catch (error) {

        res.status(500).json({
            message: error.message
        })
    }
})

// GET ALL STUDENTS list

router.get("/", async (req, res) => {

    try {

        const students = await Student.find();

        res.json(students);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

// delete students by ID

router.delete("/:id", async (req, res) => {

    try {

        await Student.findByIdAndDelete(req.params.id)

        res.json({
            message: "Student Deleted"
        })

    } catch (error) {

        res.status(500).json({
            message: error.message
        })
    }
})

//update

router.put("/:id", async (req, res) => {

    try {

        const updatedStudent =
            await Student.findByIdAndUpdate(

                req.params.id,
                req.body,
                { returnDocument: 'after' }

            )

        res.json(updatedStudent)

    } catch (error) {

        res.status(500).json({
            message: error.message
        })
    }
})

export default router;