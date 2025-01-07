import React from 'react'

const SignUp = () => {
  return (
    <main className='w-full h-screen bg-blue-300 flex flex-col justify-center'>
      <div className=" mx-auto  w-fit bg-red-400 text-center p-3 rounded-md flex flex-col gap-2">
        {/* Heading of the form */}
        <h1>Google Classroom Clone</h1>

        {/* Signup Form : make it with react-hook-forms */}
        <form action="POST" className='mx-auto'>
          <span className='flex gap-3'>
            <input type="text" id='userName' placeholder='Enter Username' className='rounded-md border-2 p-2 '/>
          </span>
        </form>

      </div>
      
    </main>
  )
}

export default SignUp;
