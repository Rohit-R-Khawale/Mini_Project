import React, { useState,useEffect } from "react";
import axios from "axios";
// importing Images
import Profile from "../Assets/profile_IMG.jpg";

// impoting react icons
import { FaInfoCircle } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import { useParams } from "react-router-dom";

const Stream = () => {
  // Axios Request
  const {id}=useParams(); 

  const [cardInfo, setCardInfo] = useState([]);

    useEffect(() =>{
      const fetchInfo = async () => {
        try {
          const response = await axios.get(`http://localhost:4000/card_info/${id}`,{params:{id}});
          setCardInfo((response.data)[0]); // Update state with API response
          // console.log(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchInfo();    
    },[id]);

  // const Data=cardInfo.stringify()
  
  



  const [isHidden, setHidden] = useState("hidden");
  //   Handels the info Part of the Class to make it visible or invisible
  const handleClick = () => {
    if (isHidden === "hidden") {
      setHidden("visible");
    } else {
      setHidden("hidden");
    }
  }
  // This Handles the Visiblity of the Announcement Form and same
    const [isVisible,setVisible] = useState("hidden");
    const handleAnnouncement=() => {
      if(isVisible === "visible") {
        setVisible("hidden");
    }else{
      setVisible("visible");
    }
  };
  return (
    <main>
      {/* Header Section */}
      <div className="bg-[url('/src/Assets/img_learnlanguage.jpg')] bg-no-repeat w-4/5  mx-auto mt-20  p-2 pt-28  rounded-xl bg-cover flex justify-between">
        <span className="flex flex-col gap-1">
          <h1 className="text-5xl text-white w-fit">{cardInfo.subject_Name}</h1>
          <p className="text-2xl text-white w-fit">{cardInfo.Name}</p>
        </span>
        <span
          className="hover:bg-gray-800 p-3 h-fit self-end rounded-full hover:opacity-50"
          onClick={handleClick}
        >
          <FaInfoCircle className="self-end text-white" />
        </span>
      </div>

      {/* Class Details */}
      <div className={isHidden}>
        <p className="w-4/5  mx-auto p-2 bg-white rounded-xl mt-2 font-semibold border-2 border-black ">
          {cardInfo.subject_Name}
          <br />
          Class Code: {cardInfo.code}
        </p>
      </div>

      <section className="flex mx-auto w-4/5 mt-2 gap-2">
        {/* Upcomming */}
        <div className=" border-2 border-gray-400 p-3 w-fit flex flex-col h-fit rounded-xl ">
          <h3 className="font-semibold text-sm mb-3 ">Upcomming</h3>
          <p className="text-sm text-[#737373] ">
            Woohoo, no work due in soon!
          </p>
          <p className="self-end text-blue-700 font-semibold hover:cursor-pointer hover:text-blue-800">
            View all
          </p>
        </div>


        {/* Announcements */}
        <div className="w-full h-screen rounded-xl ">
          <div className="mx-2 my-3 p-2 bg-white h-fit border-2 shadow-xl rounded-xl text-gray-500 hover:text-black flex  align-middle gap-2 hover:cursor-pointer" onClick={handleAnnouncement}>
            <img src={Profile} alt="Profile" className="w-12 h-12 rounded-full "/>
            <p className="my-auto">Announce Something to your Class</p>
          </div>
          <span className={isVisible}>
            <Announcement_Form/>
          </span>

          {/* All the Announcements */} 
          <div className="mt-2 flex flex-col gap-2">
            <Announcement
            Name="Pranita Jadhav"
            Date="18 Dec"
            text="Hello This is an announcement for all students that the University is closing down and you are getting your drgree by the end of this semister"
            image={Profile}
            />

            

          </div>


        </div>
      </section>
    </main>
  );
};

export default Stream;



// When we click on Announcements we get the below form for posting the announcement
const Announcement_Form = () => {
  const [announcementText, setAnnouncementText] = useState("");

  const handleInputChange = (event) => {
    setAnnouncementText(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission, e.g., send announcement to server
    console.log("Announcement submitted:", announcementText);
    setAnnouncementText("");
  };
  return (
    <div className="bg-white rounded-md shadow-md p-4 mx-2">
      <h2 className="text-lg font-semibold mb-2">
        Announce something to your class
      </h2>
      <textarea
        className="w-full resize-none border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={announcementText}
        onChange={handleInputChange}
        placeholder="Enter your announcement here..."
      />
      <div className="flex justify-end mt-3">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-md mr-2">
          Cancel
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          onClick={handleSubmit}
        >
          Post
        </button>
      </div>
    </div>
  );
};

const Announcement=(props)=>{
  return(
    <main className=" mx-2 bg-white p-3 rounded-lg">
      <section className=" mb-3 flex gap-2 justify-between">
        <div className="flex gap-2">
        <img src={Profile} alt="profile" className="w-12 h-12 rounded-full" />
          <span>
            <p className="font-semibold">{props.Name}</p>
            <p className=" text-sm text-gray-500">{props.Date}</p>
          </span>
        </div>
        <IoMdMore className="text-2xl my-auto hover:cursor-pointer"/>
      </section>
      <p>{props.text}</p>
      <hr />
      <span className="flex gap-2  rounded-lg p-1 align-middle mt-3 ">
      <img src={props.image} alt="Profile" className="w-10 h-10 rounded-full" />
      <input type="text"className=" w-full p-2 rounded-full border-2"/>
      <IoMdSend className="my-auto text-2xl text-gray-500"/>
      </span>

    </main>
  )
}