import React, { useState } from 'react'
import { MdOutlineUnfoldMore } from "react-icons/md";
const Assigned = () => {

  const [nodueDateVisible,setnodueDateVisible]=useState("hidden");
  const [thisWeek,setThisWeek]=useState("hidden");
  const [nextWeek,setNextWeek]=useState("hidden");
  const [later,setLater]=useState("hidden");
// No due Date
  const handlenoDDate = () => {
    if (nodueDateVisible==="visible") {
      setnodueDateVisible('hidden');
  }else{
    setnodueDateVisible('visible');
  }
}
// This Week
const handleThisWeek=()=>{
  if(thisWeek==="visible"){
    setThisWeek("hidden");
  }else{
    setThisWeek("visible");
  }

}
// Next Week
const handleNextWeek=()=>{
  if(nextWeek==="visible"){
   setNextWeek("hidden");
  }else{
   setNextWeek("visible");
  }

}

const handleLater=()=>{
  if(later==="visible"){
   setLater("hidden");
  }else{
   setLater("visible");
  }

}

  return (
    <main className=' w-2/4 mx-auto p-3 flex flex-col gap-2'>
      <select name="Classes" id="classes" className='p-2 rounded-md w-fit'>
        <option value="All classes">All Classes</option>
        <option value="Java Programming">Java Programming</option>
        <option value="Classroom 2">Classroom 2</option>
        <option value="Classroom 3">Classroom 3</option>
        <option value="Classroom 4">Classroom 4</option>
        <option value="Classroom 5">Classroom 5</option>
      </select>
      {/* No due date */}
      <div className="bg-[#5CBD8D]  mx-auto text-2xl w-full p-1 rounded-md border-2">
        <span className='flex justify-between' onClick={handlenoDDate}>
          <p onClick={handlenoDDate} className='hover:cursor-pointer'>No due Date</p>
          <MdOutlineUnfoldMore className='my-auto hover:cursor-pointer'/>
        </span>
        <span className={nodueDateVisible}>
          <hr />
          {/* This will be taken from the database of the Assignments  */}
          <p>Classroom 1</p>
          <p>Classroom 2</p>
          <p>Classroom 3</p>
          <p>Classroom 4</p>
        </span>
      </div>
      {/* This Week */}
      <div className="bg-[#5CBD8D]  mx-auto text-2xl w-full p-1 rounded-md border-2">
        <span className='flex justify-between' onClick={handleThisWeek}>
          <p onClick={handleThisWeek} className='hover:cursor-pointer'>This Week</p>
          <MdOutlineUnfoldMore className='my-auto hover:cursor-pointer'/>
        </span>
        <span className={thisWeek}>
          <hr />
          <p>Classroom 1</p>
          <p>Classroom 2</p>
          <p>Classroom 3</p>
          <p>Classroom 4</p>
        </span>
      </div>
      {/* Next Week */}
      <div className="bg-[#5CBD8D]  mx-auto text-2xl w-full p-1 rounded-md border-2">
        <span className='flex justify-between' onClick={handleNextWeek}>
          <p onClick={handleNextWeek} className='hover:cursor-pointer'>Next Week</p>
          <MdOutlineUnfoldMore className='my-auto hover:cursor-pointer'/>
        </span>
        <span className={nextWeek}>
          <hr />
          <p>Classroom 1</p>
          <p>Classroom 2</p>
          <p>Classroom 3</p>
          <p>Classroom 4</p>
        </span>
      </div>
      {/* Later */}
      <div className="bg-[#5CBD8D]  mx-auto text-2xl w-full p-1 rounded-md border-2">
        <span className='flex justify-between' onClick={handleLater}>
          <p onClick={handleLater} className='hover:cursor-pointer'>Later</p>
          <MdOutlineUnfoldMore className='my-auto hover:cursor-pointer'/>
        </span>
        <span className={later}>
          <hr />
          <p>Later Submission 1</p>
          <p>Later Submission 2</p>
          <p>Later Submission 3</p>
          <p>Later Submission 4</p>
        </span>
      </div>

      
        
    </main>
  )
}

export default Assigned
