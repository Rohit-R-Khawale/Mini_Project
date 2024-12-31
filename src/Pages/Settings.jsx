import React, { useState } from 'react'
import Profile from '../Assets/profile_IMG.jpg';
import { useSearchParams } from 'react-router-dom';
const Settings = () => {
    const [commentVisisblity, setCommentVisisblity]=useState("hidden");

    const handleVisiblity=()=>{
        if(commentVisisblity==="visible"){
            setCommentVisisblity("hidden");
        }else{
            setCommentVisisblity("visible");
        }
    }
  return (
    <main>
      <div className=" w-fit mx-auto mt-12 p-2 ">
        {/* Profile */}
        <section className="border-2 p-4 rounded-md">
            <h1 className='text-3xl'>Profile</h1>
           {/* Profile Picture */}
            <div>
                <h3 className='text-md text-gray-900 font-semibold my-2'>Profile picture</h3>
                <span className='flex gap-2 my-2 ml-3'>
                    <img src={Profile} alt="Profile Picture" className='w-8 h-8 rounded-full'/>
                    <p className='my-auto text-blue-600 font-semibold hover:cursor-pointer hover:text-blue-800'>Change</p>
                </span>
            </div>

            {/* Account Setting */}
            <div>
                <h3 className='text-sm text-gray-900 font-semibold '>Account Setting</h3>
                <p>Change your password and security options, and access other Google services. <span className='text-blue-400 underline hover:cursor-pointer hover:text-blue-500'>Manage</span></p>
            </div>

            {/* Change Name */}
            <div>
                <h3 className='text-sm text-gray-900 font-semibold my-2'>Change name</h3>
                <p>To change your name, ask your admin. <span className='text-blue-400 underline hover:cursor-pointer hover:text-blue-500'>Learn more</span></p>
            </div>
        </section>

        {/* Notifications */}
        <section className="border-2 p-4 rounded-md">
            <h1 className='text-3xl font-semibold '>Notifications</h1>

            {/* Email Notifications */}
            <div className="mt-4">
                <h3 className='text-xl font-semibold text-gray-700'>Email</h3>
                <p className='text-sm '>These settings apply to the notifications you get by email. <span className='text-blue-400 underline hover:cursor-pointer hover:text-blue-500'> Learn More</span></p>
            </div>

            {/* Email Notifications permision Buttons */}
            <div className="mt-3">
                <span className='flex justify-between mb-5'>
                    <label htmlFor="Allow_email_N" className='font-semibold text-gray-700'>Allow email notifications</label>
                    <input className='hover:cursor-pointer' type="checkbox" id='Allow_email_N' onClick={handleVisiblity}/>
                </span>
                {/* the below section will be visible only if the above input is "True" */}
                <div className={commentVisisblity}>
                    {/* Comments */}
                    <section className=" flex flex-col gap-2 text-gray-700 font-medium ">
                        <h3 className=''>Comments</h3>
                        {/* **************** */}
                        <span className='flex justify-between'>
                            <label htmlFor="postComments">Comments on your post</label>
                            <input className='hover:cursor-pointer' type="checkbox" id='postComments'/>
                        </span>
                        {/* **************** */}
                        <span className='flex justify-between'>
                            <label htmlFor="mentionedComments">Comments that mention you</label>
                            <input className='hover:cursor-pointer' type="checkbox" id='mentionedComments'/>
                        </span>
                        {/* **************** */}
                        <span className='flex justify-between'>
                            <label htmlFor="privateCmt">Private comments on work</label>
                            <input className='hover:cursor-pointer' type="checkbox" id='privateCmt'/>
                        </span>
                    </section>

                    {/* Classes youre enrolled in */}
                    <section className=" flex flex-col gap-2 text-gray-700 font-medium my-7 ">
                        <h3>Classes's you're enrolled in</h3>
                    
                        <span className='flex justify-between'>
                            <label htmlFor="postTeach">Work and other posts from teachers</label>
                            <input className='hover:cursor-pointer' type="checkbox" id='postTeach'/>
                        </span>
                        {/* **************** */}
                        <span className='flex justify-between'>
                            <label htmlFor="returnedComment">Returned work and grades from your teachers</label>
                            <input className='hover:cursor-pointer' type="checkbox" id='returnedComment'/>
                        </span>
                        {/* **************** */}
                        <span className='flex justify-between'>
                            <label htmlFor="invitation">Invitations to join classes as a student</label>
                            <input className='hover:cursor-pointer' type="checkbox" id='invitation'/>
                        </span>
                        {/* **************** */}
                        <span className='flex justify-between'>
                            <label htmlFor="dueDates">Due-date reminders for your work</label>
                            <input className='hover:cursor-pointer' type="checkbox" id='dueDates'/>
                        </span>
                       
                    </section>
                    <hr />
                    {/* Thank you Message */}
                    <div className=" py-5 w-full text-center  ">
                        <p className='font-medium text-xl  '>Thank You For Using our services</p>
                    </div>


                </div>

            </div>

        </section>
      </div>
    </main>
  )

}

export default Settings