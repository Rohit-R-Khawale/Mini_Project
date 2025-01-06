import React from 'react'

const SignUp = () => {
  return (
    <main>
        <div className=" mx-auto w-fit bg-red-400">
            <form action="POST">
                <span className='flex gap-3'>
                    <label htmlFor="Username :"></label>
                    <input type="text" id='userName' placeholder='Enter Username' className='rounded-md border-2'/>
                </span>
            </form>
        </div>
      
    </main>
  )
}

export default SignUp;
