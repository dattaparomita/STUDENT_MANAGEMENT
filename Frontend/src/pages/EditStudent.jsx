import React, { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const EditStudent = () => {

    const navigate = useNavigate()
    const { id } = useParams() //This gets the student id from URL.


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [course, setCourse] = useState("")


    async function updateStudent() {

        await axios.put(
            `http://localhost:4444/students/${id}`,
            {
                Name: name,
                Email: email,
                Age: age,
                Course: course
            }
        )

        navigate("/students")
    }

    return (

        <div className='w-2/6 mx-auto mt-20 bg-white p-5 rounded'>

            <h1 className='text-2xl font-bold mb-5'>
                Edit Student
            </h1>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter Name'
                className='border p-2 w-full rounded'
            />

            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter Email'
                className='border p-2 w-full rounded mt-3'
            />

            <input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder='Enter Age'
                className='border p-2 w-full rounded mt-3'
            />

            <input
                type="text"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                placeholder='Enter Course'
                className='border p-2 w-full rounded mt-3'
            />

            <button
                onClick={updateStudent}
                className='bg-blue-500 text-white p-2 rounded mt-5 w-full'
            >
                Update
            </button>

        </div>
    )
}

export default EditStudent