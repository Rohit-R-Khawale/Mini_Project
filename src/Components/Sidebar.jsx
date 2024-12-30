import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useState } from 'react';
import {sidebarVisible} from "./Navbar";
// importing Images
import Profile from "../Assets/profile_IMG.jpg";

// import react icons
import { IoMdHome } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { MdOutlineArrowRight } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";
import { MdOutlineArchive } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { VscPreview } from "react-icons/vsc";
import { LuListTodo } from "react-icons/lu";
import { RiArrowDownSFill } from "react-icons/ri";
import { SidebarContext } from '../Context/SidebarContext';

function Sidebar() {
    const [isActive,setActive]=useState(true);  //used to toggle bewtween ON and OFF
    const [isActive2,setisActive2]=useState(true); 
    const [TeacherVisible,setTVisible]=useState("hidden");   //sets Teachers section to visible or invisible
    const [EnrolledVisible,setEVisible]=useState("hidden");  //sets Enrolled section to visible or hidden
    
    // Function to extend/ expand Enrolled Section
    const expandEnrolled=()=>{
        if (isActive2) {
            setisActive2(false);
            setEVisible("visible");
            // console.log(isActive);  just to check if they are toggling
        }
        else{
            setisActive2(true);
            setEVisible("hidden")
            // console.log(isActive);
        }
    }
    // Function to Extend The Teachers Section 
    const toggle=()=>{
        if (isActive) {
            setTVisible("visible");
            setActive(false);
        }
        else{
            setTVisible("hidden");
            setActive(true);
        }
    }

    
    // Data Section
    
    // This is the data for the Teaching Classes 
    const TeachClasses=[
        {name:"Classroom 1", img:Profile, alt:"classroom 1"},
        {name:"Classroom 2", img:Profile, alt:"classroom 2"}
    ];
    
    // This is the data for the Enrolled Classes 
    const EnrolledClasses=[
        { img:Profile, alt:"classroom a",name:"Classroom a"},
        { img:Profile, alt:"classroom b",name:"Classroom b"},
        { img:Profile, alt:"classroom c",name:"Classroom c"},
        { img:Profile, alt:"classroom d",name:"Classroom d"}
    ];

const {sidebarVisible}=useContext(SidebarContext);
return (
<sidebar className={sidebarVisible}>
<main className='border-r-2 overflow-x-auto w-60 hover:transition-all h-screen flex flex-col  text-[#5F6368] align-middle py-3 gap-3 overflow-y-auto max-md:w-60 max-sm:w-full '>

{/* Home Calendar Section */}
<section className="flex flex-col">
    {/* Home */}
    <Link to="/">
    <span className='w-full flex gap-2 pl-8 hover:bg-blue-100 hover:cursor-pointer py-2 active:bg-blue-500 '>
        
            <IoMdHome className=' text-3xl'/>
            <p className='my-auto text-black'>Home</p>
    </span>
    </Link>
    {/* Calendar */}
    <span className='w-full flex gap-2 pl-8 hover:bg-blue-100 hover:cursor-pointer py-2 active:bg-blue-500 '>
        <SlCalender className=' text-3xl' />
        <p className='my-auto text-black'>Calendar</p>
    </span>
</section>  

<hr />
{/* Teaching Section */}
{/* Change the Logo to drop down on Onclick event    */}
<section className='flex py-2 hover:bg-sky-100 hover:cursor-pointer active:bg-blue-500  ' onClick={toggle}> 
    {isActive?<MdOutlineArrowRight className='text-3xl'/>:<RiArrowDownSFill  className='text-3xl'/>} 
    
    <IoPeople className='text-3xl'/>
    <p className='ml-2 text-black'>Teaching</p>
</section>
{/* Enxtended teachers */}
<section className={TeacherVisible}>
    <span className='w-full flex gap-2 pl-8 hover:bg-blue-100 hover:cursor-pointer py-2 active:bg-blue-500'>
    <VscPreview className='text-3xl'/>
    <p className='my-auto text-black'>To review</p>
    </span >
    {/* from Here on There will be bars of the classes you are teaching */}

    {TeachClasses.map((data,index)=>(
        <ProfCard key={index}{...data} />
    ))}  
</section>

<hr />

{/* Enrolled Section */}
<section className='flex py-2 hover:bg-sky-100 hover:cursor-pointer active:bg-blue-500' onClick={expandEnrolled} >
    {/* changes the icon on extended and not-extended situatuions */}
    {isActive2?<MdOutlineArrowRight className='text-3xl'/>:<RiArrowDownSFill  className='text-3xl'/>} 

    <GiGraduateCap className='text-3xl'/>
    <p className='ml-2 text-black'>Enrolled</p>
</section>

{/* Enrolled Classes Section */}
<section className={EnrolledVisible}>
<span className='w-full flex gap-2 pl-8 hover:bg-blue-100 hover:cursor-pointer py-2 active:bg-blue-500'>
        <LuListTodo className=' text-3xl'/>
        <p className='my-auto text-black'>To-Do</p>
</span>

{EnrolledClasses.map((data,index)=>(
    <ProfCard key={index} {...data}/>
))
}
</section>

<hr />

{/* Archived Classes and Settings */}
<section>
{/* Archived Section */}
<Link to="/archived" className='w-full flex gap-2 pl-8 hover:bg-blue-100 hover:cursor-pointer py-2 active:bg-blue-500'>
        <MdOutlineArchive className=' text-3xl'/>
        <p className='my-auto text-black'>Archived classes</p>
</Link>

{/* Settings */}
<span className='w-full flex gap-2 pl-8 hover:bg-blue-100 hover:cursor-pointer py-2 active:bg-blue-500'>
    <IoSettingsOutline className=' text-3xl'/>
    <p className='my-auto text-black'>Setting</p>
</span>
</section>

</main>
</sidebar>
);}

export default Sidebar;



// Classroom Card/ Profile Card
const ProfCard=(props)=>{
    return(
        <Link to="/cardcontent">
        <span className='w-full flex gap-2 pl-8 hover:bg-blue-100 hover:cursor-pointer py-2 active:bg-blue-500'>
        
        <img src={props.img} alt={props.alt} className='w-10 h-10 rounded-full bg-blue-500 overflow-hidden'/>
        
        <p className='my-auto text-black'>{props.name}</p>
        </span>
        </Link>
    )
}