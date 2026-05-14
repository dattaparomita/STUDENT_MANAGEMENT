import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AddStudent = () => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm()


    async function onSubmit(data) {

        try {

            await axios.post
                ("http://localhost:4444/students", data)

            alert("Student Added Successfully")

            navigate("/students")

        } catch (error) {

            console.log(error)
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="bg-white w-2/6 mx-auto my-20 h-fit rounded-lg">
                    <div className="flex flex-col">
                        <h1 className='font-bold text-center text-2xl m-4'>Add Student</h1>
                        <p className='text-center text-gray-500 text-sm '>Fill the details below to add a new student</p>
                    </div>

                    <div className='flex flex-col'>
                        <label className='font-bold mx-3'>Name</label>
                        <input
                            {...register("Name",
                                {
                                    required: "Name is required"
                                }
                            )}
                            type="text"
                            placeholder='Enter student name'
                            className='border rounded-md m-3 p-1'
                        />
                        <p className='err-msg m-1'>{errors.Name?.message}</p>
                    </div>

                    <div className='flex flex-col'>
                        <label className='font-bold mx-3'>Email</label>
                        <input
                            {...register("Email",
                                {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: "Invalid email address"
                                    }
                                }
                            )}
                            type="email"
                            placeholder='Enter email address'
                            className='border rounded-md m-3 p-1'
                        />
                        <p className='err-msg m-1'>{errors.Email?.message}</p>
                    </div>

                    <div className='flex flex-col'>
                        <label className='font-bold mx-3'>Age</label>
                        <input
                            {...register("Age",
                                {
                                    required: "Age is required",
                                    min: {
                                        value: 18,
                                        message: "age must be greater than 18"
                                    },
                                    max: {
                                        value: 99,
                                        message: "age must be smaller than 100"
                                    }
                                }

                            )}
                            type="number"
                            placeholder='Enter age'
                            className='border rounded-md m-3 p-1'
                        />
                        <p className='err-msg m-1'>{errors.Age?.message}</p>
                    </div>

                    <div className='flex flex-col'>
                        <label className='font-bold mx-3'>Course</label>
                        <input
                            {...register("Course",
                                { required: "Course is required" }
                            )}
                            type="text"
                            placeholder='Enter course'
                            className='border rounded-md m-3 p-1'
                        />
                        <p className='err-msg m-1'>{errors.Course?.message}</p>
                    </div>

                    <div className='flex justify-center'>
                        <button
                            disabled={isSubmitting}
                            type='submit'
                            className='bg-blue-600 text-white rounded-md p-2 w-full m-4'
                        >
                            {isSubmitting ? "Adding..." : "Add Student"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddStudent