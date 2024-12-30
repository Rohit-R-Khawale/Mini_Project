import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// Importing Pages 
const Card_Navbar = () => {
 
  return (
    <main>
      {/* Navbar for the Page */}
      <nav className='flex gap-2 bg-white h-10'>
            <Link to='/cardcontent'  className='hover:bg-blue-100 hover:text-blue-600 hover:cursor-pointer pt-2 hover:border-b-4 hover:border-blue-500 px-4 '>Stream</Link>
            <Link to='/cardcontent/classwork' className='hover:bg-blue-100 hover:text-blue-600 hover:cursor-pointer pt-2 hover:border-b-4 hover:border-blue-500 px-4 '>Classwork</Link>
            <Link to='/cardcontent/people' className='hover:bg-blue-100 hover:text-blue-600 hover:cursor-pointer pt-2 hover:border-b-4 hover:border-blue-500 px-4 '>People</Link>
        </nav>
        <hr />
    </main>
  )
}

export default Card_Navbar
