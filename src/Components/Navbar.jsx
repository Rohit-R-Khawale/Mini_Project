import React, { useContext } from 'react';
import { useState } from 'react';
// import react icons
import { CgMenu } from "react-icons/cg";
import { PiGreaterThan } from "react-icons/pi"; 
import { GoPlus } from "react-icons/go";
import { IoApps } from "react-icons/io5";
// Importing Images
import Profile from "../Assets/profile_IMG.jpg";
import LOGO from '../Assets/logo_square_rounded.svg';

// importing Context from SidebarContext.js
import { SidebarContext } from '../Context/SidebarContext';
function App() {
// ***************************************************************************
// This code is for Navbar Page


// This will import the Context values from the parent Component i.e. =>Home Page and will modify them here
// once "sidebarVisible, setSidebarVisible" values change they change in orignal file also so the sidebar will import these values to set its visiblity to visible or hidden (Used UseContext for this)
const {sidebarVisible}=useContext(SidebarContext);
const {setSidebarVisible}=useContext(SidebarContext);
const [isCard, setIsCard]=useState("flex visible");

const sidebarHandler=()=>{
if(sidebarVisible==="hidden") {
    setSidebarVisible("visible");
}else{
    setSidebarVisible("hidden");
}
}


// Main HTMLS and CSS code
return (
<>
<navbar className='flex pl-5 justify-between mx-2 sticky'  >
<div className="flex align-middle ml-2 gap-5 w-fit ">

< CgMenu className='text-3xl text-[#5F6368] scale-90 mr-3 my-auto hover:cursor-pointer' onClick={sidebarHandler}/>
    <img src={LOGO} alt="classroom" className='w-10 h-10 scale-90 my-auto '/>
    <p className='my-auto text-3xl text-[#5F6368] hover:text-[#1E8E3E] hover:underline hover:cursor-pointer'>Classroom</p>

    <span className={isCard}>
        <PiGreaterThan className='text-2xl text-[#5F6368] w-fit h-fit my-auto relative top-1 scale-90 font-bold max-md:hidden' />
        <span className='text-[#646368] scale-90 hover:underline hover:cursor-pointer hover:text-blue-500 max-md:hidden'>
            <p className='font-bold text-2xl'>Card Name</p>
            Card owner Name
        </span>
    </span>
</div>

{/* Last Sections Profile/ Add Class and Apps */}
<div className=" my-auto flex gap-3 text-[#646368] ">
<span className='bg-gray-300 h-fit w-fit rounded-full my-auto hover:cursor-pointer max-sm:hidden '>
    <GoPlus className='text-4xl my-auto mx-auto font-semibold max-sm:text-2xl'/>
</span>
<span className='hover:bg-gray-200 h-fit w-fit rounded-full my-auto p-2 hover:cursor-pointer max-md:hidden'>
    <IoApps className='text-xl my-auto '/>
</span>

<img src={Profile} alt="Profile Image" className='w-10 h-10 rounded-full cover hover:cursor-pointer max-md:hidden ' />
</div>
</navbar>

</>
);}


export default App;
