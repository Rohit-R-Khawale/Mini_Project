import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// Importing Pages 
const Card_Navbar = () => {
  const [isTeacher,setTeacher]=useState(true);

  const {id}=useParams();

 
  return (
    <main>
      {/* Navbar for the Page */}
      <nav className='flex gap-2 bg-white h-10'>
            <Link to={`/cardcontent/${id}`}  className='hover:bg-blue-100 hover:text-blue-600 hover:cursor-pointer pt-2 hover:border-b-4 hover:border-blue-500 px-4 '>Stream</Link>
            <Link to={`/cardcontent/${id}/classwork`} className='hover:bg-blue-100 hover:text-blue-600 hover:cursor-pointer pt-2 hover:border-b-4 hover:border-blue-500 px-4 '>Classwork</Link>
            <Link to={`/cardcontent/${id}/people`} className='hover:bg-blue-100 hover:text-blue-600 hover:cursor-pointer pt-2 hover:border-b-4 hover:border-blue-500 px-4 '>People</Link>
            {
              isTeacher && 
              <Link to={`/cardcontent/${id}/marks`} className='hover:bg-blue-100 hover:text-blue-600 hover:cursor-pointer pt-2 hover:border-b-4 hover:border-blue-500 px-4 '>Marks</Link>
            }
        </nav>
        <hr />
    </main>
  )
}

export default Card_Navbar
