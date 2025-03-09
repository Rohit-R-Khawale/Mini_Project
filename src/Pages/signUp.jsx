import React from 'react';
import { get, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
//  images
import Classroom from "../Assets/logo_square_rounded.svg";
const SignUp = () => {
// Backend  Request Queries






  const {
    register,
    getValues,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) =>{
    const Data={
      Name:data.Name,
      Email:data.Email,
      Password:data.password,
      Role:data.Role,
    };
    // console.log(data);
    const response = await axios.post('http://localhost:4000/signup',Data, {
      headers: {
        "Content-Type": "application/json",
      },
      
    })
    console.log("Response:", response.data);
    alert("Registration Successful!");
    reset();
  };
  //console.log(watch("Name")); // watch input value by passing the name of it



  return (
    <main className='w-full h-screen flex flex-col justify-center text-xl'>
      <div className=" mx-auto  w-fit text-center p-3 rounded-md flex flex-col gap-2">
        {/* Heading of the form */}
        <span className='justify-center align-middle'>
          <img src={Classroom} alt="Classroom clone" className='w-14 mx-auto'/>
          <h1 className='my-auto font-semibold'>Google Classroom Clone</h1>
        </span>


<form onSubmit={handleSubmit(onSubmit)} className='border-2 border-black p-2 flex flex-col gap-2 rounded-md '>
      {/* register your input into the hook by invoking the "register" function */}
      {/* Name (User Name) */}
      <span className='flex gap-2'>
        <label htmlFor="student" value="student ">Student</label>
        <input type="radio" id='student' value="student" {...register("Role")}  />
        <p className='bottom-2'>|</p>
        <label htmlFor="teacher">Teacher</label>
        <input type="radio" id='teacher' value="teacher" {...register("Role")}/>
      </span>


      <input type='text' maxLength={20} minLength={8} placeholder="User Name  " {...register("Name")} className='border-2 border-gray-400 rounded-md px-1' />

      {/* Email */}
      <input type="email" name="Email" placeholder='Email' {...register("Email")} className='border-2 border-gray-400 rounded-md px-1' />

      {/* Password */}
      <input {...register("password", { required: true })} name='password' className='border-2 border-gray-400 rounded-md px-1' placeholder="password" type='password' />
      {errors.requiredField && <span className='text-red-500 text-sm'>Password field is required</span>}
      <p className='text-xs'>Note: Write Down your Password in case you forget</p>
      

      {/* Submit */}
      <input type="submit" className='border-2 border-gray-400 rounded-md px-2 hover:bg-green-300 hover:cursor-pointer'/>

      <Link to="/" className='text-sm text-blue-400 hover:underline hover:cursor-pointer'>Signin</Link>
      
    </form>

      </div>
      
    </main>
  )
}

export default SignUp;
