import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// Importing Pages 
const Todo_Navbar = () => {
 
  return (
    <main>
      {/* Navbar for the Page */}
      <nav className='flex gap-2 bg-white h-10'>
            <Link to='/todo'  className='hover:bg-blue-100 hover:text-blue-600 hover:cursor-pointer pt-2 hover:border-b-4 hover:border-blue-500 px-4 '>Assigned</Link>
            <Link to='/todo/missing' className='hover:bg-blue-100 hover:text-blue-600 hover:cursor-pointer pt-2 hover:border-b-4 hover:border-blue-500 px-4 '>Missing</Link>
            <Link to='/todo/done' className='hover:bg-blue-100 hover:text-blue-600 hover:cursor-pointer pt-2 hover:border-b-4 hover:border-blue-500 px-4 '>Done</Link>
        </nav>
        <hr />
    </main>
  )
}

export default Todo_Navbar
