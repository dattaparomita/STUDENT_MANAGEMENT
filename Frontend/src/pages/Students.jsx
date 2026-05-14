import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

const Students = () => {

    const navigate = useNavigate()

    const [students, setStudents] = useState([])

    async function fetchStudents() {

        try {

            const response = await axios.get(
                "http://localhost:4444/students"
            )

            setStudents(response.data)

        } catch (error) {

            console.log(error)
        }
    }

    // delete
    async function deleteStudent(id) {
        const confirmDelete = window.confirm(
            "Are you sure?"
        )

        try {

            await axios.delete(
                `http://localhost:4444/students/${id}`
            )

            fetchStudents()

        } catch (error) {

            console.log(error)
        }
    }


    useEffect(() => {

        fetchStudents()

    }, [])

    return (
        <div className='bg-white w-4/6 mx-auto mt-10 rounded-lg p-5'>
            <h1 className='text-2xl font-bold mb-4'>
                Student List
            </h1>

            <table className='w-full border border-collapse'>
                <thead>
                    <tr className='bg-gray-200'>
                        <th className='border p-2'>
                            Name
                        </th>

                        <th className='border p-2'>
                            Email
                        </th>

                        <th className='border p-2'>
                            Age
                        </th>

                        <th className='border p-2'>
                            Course
                        </th>

                        <th className='border p-2' colSpan={2}>
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody>

                    {
                        students.map((student, index) => (
                            <tr key={index}>
                                <td className='border p-2'>
                                    {student.Name}
                                </td>

                                <td className='border p-2'>
                                    {student.Email}
                                </td>

                                <td className='border p-2'>
                                    {student.Age}
                                </td>

                                <td className='border p-2'>
                                    {student.Course}
                                </td>

                                <td className='border p-2 text-center'>

                                    <button
                                        onClick={() => deleteStudent(student._id)}
                                        className='bg-red-500 text-white px-3 py-1 rounded'
                                    >
                                        Delete
                                    </button>

                                </td>

                                <td className='border p-2 text-center'>

                                    <button
                                        onClick={() => navigate(`/edit/${student._id}`)}
                                        className='bg-blue-500 text-white px-3 py-1 rounded'
                                    >
                                        Edit
                                    </button>

                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Students