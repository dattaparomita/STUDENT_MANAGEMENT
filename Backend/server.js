import express from 'express';
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import studentRoutes from "./routes/studentRoutes.js";

dotenv.config();

const app = express()

app.use(cors());
app.use(express.json())

app.use("/students", studentRoutes);


app.get("/", (req, res) => {
    res.send("submit")
})

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));


app.listen(4444);
