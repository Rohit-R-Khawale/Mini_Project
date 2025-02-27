import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
//  images
import Classroom from "../Assets/logo_square_rounded.svg";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data);
  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <main className='w-full h-screen flex flex-col justify-center text-xl'>
      <div className=" mx-auto  w-fit text-center p-3 rounded-md flex flex-col gap-2">
        {/* Heading of the form */}
        <span className='justify-center align-middle'>
          <img src={Classroom} alt="Classroom clone" className='w-14 mx-auto'/>
          <h1 className='my-auto font-semibold'>Google Classroom Clone</h1>
        </span>
        {/* Signup Form : make it with react-hook-forms */}
        {/* <form action="POST" className='mx-auto'>
          <span className='flex gap-3'>
            <input type="text" id='userName' placeholder='Enter Username' className='rounded-md border-2 p-2 '/>
          </span>
        </form> */}

<form onSubmit={handleSubmit(onSubmit)} className='border-2 border-black p-2 flex flex-col gap-2 rounded-md '>
      {/* register your input into the hook by invoking the "register" function */}
      <input type='text' maxLength={20} minLength={8} placeholder="User Name  " {...register("example")} className='border-2 border-gray-400 rounded-md px-1' />

      {/* Password */}
      <input {...register("password", { required: true })} className='border-2 border-gray-400 rounded-md px-1' placeholder="password" type='password' />
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
