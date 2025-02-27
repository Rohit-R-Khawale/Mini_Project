import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import react icons
import { CgMenu } from "react-icons/cg";
import { GoPlus } from "react-icons/go";
import { IoApps } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
// Importing Images
import Profile from "../Assets/profile_IMG.jpg";
import LOGO from '../Assets/logo_square_rounded.svg';

// importing the Components and Pages 

// importing Context from SidebarContext.js
import { SidebarContext } from '../Context/SidebarContext';


function Navbar() {
// ***************************************************************************
// This code is for Navbar Page


// This will import the Context values from the parent Component i.e. =>Home Page and will modify them here
// once "sidebarVisible, setSidebarVisible" values change they change in orignal file also so the sidebar will import these values to set its visiblity to visible or hidden (Used UseContext for this)
const {sidebarVisible}=useContext(SidebarContext);
const {setSidebarVisible}=useContext(SidebarContext);

const sidebarHandler=()=>{
if(sidebarVisible==="hidden") {
    setSidebarVisible("visible");
}else{
    setSidebarVisible("hidden");
}
}

// Handles the popup of the join class or create class
const [openpopup, setOpenPopup] = useState(false);
const popVisible = ()=>{
    if(openpopup) {
      setOpenPopup(false);
    }else{
      setOpenPopup(true);
    }
  }
// Join Class Popup Handler
const [JoinClasspopup, setJoinClasspopup] = useState(false);
const handleClasspopup=()=>{
    if(JoinClasspopup){
        setJoinClasspopup(false);
    }else{
        setJoinClasspopup(true);
    }
}

//Create Class Popup Handler
const [CrtClassPopup,setCrtClassPopup]=useState(false);
const CrtClasspopHandler=()=>{
    if(CrtClassPopup){
        setCrtClassPopup(false);
    }else{
        setCrtClassPopup(true);
    }
}

// This handles the Create Class Popup Form  Popup
const [CrtClassFormpopup,setCrtClassFormPopup]=useState(false);
const hadleCreateClsForm=()=>{
    if(CrtClassFormpopup){
        setCrtClassFormPopup(false);
    }else{
        setCrtClassFormPopup(true);
    }
}


// This handles the Checkbox status of the create Class popup
const [checkboxStatus,setCheckboxStatus]=useState(false);
const handlecheckboxStatus=()=>{
    if(checkboxStatus){
        setCheckboxStatus(false);
    }else{
        setCheckboxStatus(true);
    }
}
// This handles the Continue button Click
const onSubmit=(checkboxStatus)=>{
    console.log(checkboxStatus);
    if(checkboxStatus){
        hadleCreateClsForm();
        CrtClasspopHandler();

}}

// Main HTMLS and CSS code
return (
<main className='flex px-5 justify-between sticky min-h-14 w-full'  >

                                    {/* Popup  */}
    {openpopup && 
    <div className="rounded-md bg-white p-2 popup flex flex-col gap-2">
    <IoMdClose onClick={popVisible} className="hover:cursor-pointer self-end"/> 
    <p className="p-2 border-2 border-gray-2 rounded-md hover:cursor-pointer hover:bg-green-600 hover:text-white hover:border-black " onClick={CrtClasspopHandler}>Create Class</p>
    <p className="p-2 border-2 border-gray-2 rounded-md hover:cursor-pointer hover:bg-green-600 hover:text-white hover:border-black " onClick={handleClasspopup}>Join Class</p>
  </div>
  }
                                {/* Join Class Popup */}
  { JoinClasspopup && <form  className='bg-white popup rounded-md  p-4 flex flex-col gap-3 '>
     <h1 className='font-bold text-xl'>Join Class</h1>
     {/* Profile section */}
     <section className='p-4 flex flex-col gap-3 border-2 border-gray-400  rounded-md'>
        <p className='text-gray-500'>You're currently siged in as </p>
        <div className='flex gap-14  '>
            {/* Profile Info */}
            <span className='flex gap-2'>
                {/* Note the Profile image will be fetched from the backend */}
                <img src={Profile} alt="Profile image" className='w-10 h-10 my-auto mx-auto rounded-full ' />
                <span>
                    <p>Name of the Person</p>
                    <p>Email of the Person</p>
                </span>
            </span>
            {/* Switch Profile */}
            <span>
                <button className='p-2 border-2 border-black rounded-md text-blue-500 hover:cursor-pointer hover:text-white hover:bg-blue-500 transition-all'>Switch Account</button>
            </span>
        </div>

     </section>

     {/* Class code Section */}
    <section className='p-4 flex flex-col gap-3 border-2 border-gray-400  rounded-md'>
        <span>
            <h2 className='text-gray-500'>Class Code</h2>
            <p className='text-gray-500'>Ask your teacher for the class code, then enter it here.</p>
        </span>
        <input type="text" required className='border-2 border-gray-400 w-1/2 rounded-md p-2 ' placeholder='Class Code' />
        
    </section>

    <section className='p-4 flex flex-col gap-3 rounded-md'>
        <p className='text-gray-500'>To sign in with a class code</p>
        <ul>
            <li>Use an authorised account</li>
            <li>Use a class code with 5-7 letters or numbers, and no spaces or symbols</li>
        </ul>
        <p>If you have trouble joining the class, go to the <span className='text-blue-500 underline hover:cursor-pointer'>Help Center article</span></p>
    </section>
    <section className='flex gap-2 self-end'>
        <button className='border-2 rounded-md px-2 w-16  hover:cursor-pointer hover:bg-blue-600 hover:text-white transition-all' type='reset' onClick={handleClasspopup}>Cancel</button>
        <button className='border-2 rounded-md px-2 w-16  hover:cursor-pointer hover:bg-blue-600 hover:text-white transition-all' type='submit'>Join</button>
    </section>
    </form>
  }

  {CrtClassPopup && 
  <form className='bg-white border-2 border-black popup p-3 rounded-md flex flex-col gap-3 w-2/5'>
    <h2 className='text-md font-bold text-gray-600 '>Using Classroom at a school/university with students?</h2>

    <section className='flex flex-col gap-2 '>
        <p>If so, your school must sign up for a <span className='text-blue-400 underline hover:cursor-pointer  '>Google Workspace for Education</span> account before you can use Classroom.<span className='text-blue-400 underline hover:cursor-pointer  '> Learn more</span></p>

        <p>
        Google Workspace for Education lets schools/universities decide which Google services their students can use, and provides additional <span className='text-blue-400 underline hover:cursor-pointer'>privacy and security</span> protection that is important in a school or university setting. Students cannot use Google Classroom in a school or university with their personal accounts.
        </p>
    </section>


    <section className='flex gap-2 bg-gray-500 p-2 rounded-md'>
        <input type="checkbox" id='understood' required className='mx-3 w-5' onClick={handlecheckboxStatus} />
        <label htmlFor="understood" className='text-white '>I've read and understand the above notice, and I'm not using Classroom at a school/university with students</label>
    </section>

    <span className='self-end flex gap-2'>
        <button className='p-2 border-2 border-gray-2 rounded-md hover:cursor-pointer hover:bg-blue-600 hover:text-white hover:border-black' type='reset' onClick={CrtClasspopHandler}>Go back</button>
        <p className='p-2 border-2 border-gray-2 rounded-md hover:cursor-pointer hover:bg-blue-600 hover:text-white hover:border-black' onClick={onSubmit }>Continue</p>
    </span>
  </form>
  }
{/* Create Class Form */}
  {CrtClassFormpopup &&
  <form className='bg-white border-2 border-black popup p-3 rounded-md flex flex-col gap-3 w-2/5'>
    <span className='flex flex-col'>
        <label htmlFor="clsName">Class Name (required) </label>
        <input type="text" id='clsName' className='border-2 rounded-md p-1 focus:border-b-4 focus:border-b-blue-800 focus:bg-gray-400 focus:text-white' required/>
    </span>
    <span className='flex flex-col'>
        <label htmlFor="section">Section </label>
        <input type="text" id='section' className='border-2 rounded-md p-1 focus:border-b-4 focus:border-b-blue-800 focus:bg-gray-400 focus:text-white'/>
    </span>
    <span className='flex flex-col'>
        <label htmlFor="subject">Subject </label>
        <input type="text" id='subject' className='border-2 rounded-md p-1 focus:border-b-4 focus:border-b-blue-800 focus:bg-gray-400 focus:text-white'/>
    </span>
    <span className='flex flex-col'>
        <label htmlFor="room">Room </label>
        <input type="text" id='room' className='border-2 rounded-md p-1 focus:border-b-4 focus:border-b-blue-800 focus:bg-gray-400 focus:text-white '/>
    </span>
    

    <span className='flex gap-3 self-end'>
        <button className='w-14 bg-gray-400 hover:cursor-pointer hover:bg-blue-400 p-1 rounded-md hover:text-white ' onClick={hadleCreateClsForm}>Cancel</button>
        <button className='w-14 bg-gray-400 hover:cursor-pointer hover:bg-blue-400 p-1 rounded-md hover:text-white '>Create</button>
    </span>

  </form>
  }
{/* Popup Ends here */}



<div className="flex align-middle gap-5 w-fit ">

< CgMenu className='text-3xl text-[#5F6368] scale-90  my-auto hover:cursor-pointer' onClick={sidebarHandler}/>
    <Link to="/" className='my-auto '><img src={LOGO} alt="classroom" className='w-10 h-10 scale-90 '/></Link>
    <Link to="/" className='my-auto text-3xl text-[#5F6368] hover:text-[#1E8E3E] hover:underline hover:cursor-pointer'>Classroom</Link>

{/* This section should be visible when the focus is inside a Card */}
    {/* <span className={isCard}>
        <PiGreaterThan className='text-2xl text-[#5F6368] w-fit h-fit my-auto relative top-1 scale-90 font-bold max-md:hidden' />
        <span className='text-[#646368] scale-90 hover:underline hover:cursor-pointer hover:text-blue-500 max-md:hidden'>
            <p className='font-bold text-2xl'>Card Name</p>
            Card owner Name
        </span>
    </span> */}
</div>

{/* Last Sections Profile/ Add Class and Apps */}
<div className=" my-auto flex gap-3 text-[#646368] ">  
<span className='bg-gray-300 h-fit w-fit rounded-full my-auto hover:cursor-pointer max-sm:hidden '>
    <GoPlus className='text-4xl my-auto mx-auto font-semibold max-sm:text-2xl'onClick={popVisible}/>
</span>
<span className='hover:bg-gray-200 h-fit w-fit rounded-full my-auto p-2 hover:cursor-pointer max-md:hidden'>
    <IoApps className='text-xl my-auto '/>
</span>

<a href="https://accounts.google.co.in/" target="_blank">
<img src={Profile} alt="Profile Image" className='w-10 h-10 rounded-full cover hover:cursor-pointer max-md:hidden ' />
</a>
</div>
</main>
);}


export default Navbar;
