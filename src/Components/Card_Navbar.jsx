import React from 'react'

const Card_Navbar = () => {
  return (
    <main>
      {/* Navbar for the Page */}
      <nav className='flex gap-2 bg-white w-full h-10 px-2'>
            <p className='hover:bg-blue-100 hover:text-blue-600 hover:cursor-pointer pt-2 hover:border-b-4 hover:border-blue-500 px-4 '>Stream</p>
            <p className='hover:bg-blue-100 hover:text-blue-600 hover:cursor-pointer pt-2 hover:border-b-4 hover:border-blue-500 px-4 '>Classwork</p>
            <p className='hover:bg-blue-100 hover:text-blue-600 hover:cursor-pointer pt-2 hover:border-b-4 hover:border-blue-500 px-4 '>People</p>
        </nav>
        <hr />
    </main>
  )
}

export default Card_Navbar
