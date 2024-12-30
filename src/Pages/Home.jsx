import React, { useState } from "react";
import {Route, Routes } from "react-router-dom";
// importing Components
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Card_Section from "../Components/Card_Section";
import Card_Content from "../Components/Card_Content";
//  importing Context from SidebarContext.js
import { SidebarContext } from "../Context/SidebarContext";
import Stream from "./stream";
import Classroom from "./Classwork";
import Archived from "./Archieved_Classes";

function Home() {
  // Used to Show/Hide Sidebar in the Webpage
  const [sidebarVisible, setSidebarVisible] = useState("visible");
  
    
   
  return (
    // Routing was done on this page because the content will change in this page only and the Navbar and Sidebar will remain same in all other cases.
    <main >
      <SidebarContext.Provider value={{ sidebarVisible, setSidebarVisible }}>
        <Navbar /> {/*Rendered Card_Navbar*/}
        <hr />
        <span className="flex max-sm:block overflow-hidden">
          <Sidebar />
          <span className=" w-full">
            
            {/* Note: There can only be one Routes in the entire App */}
            <Routes>
              <Route path="/" element={<Card_Section/>}/>,
              <Route path="/cardcontent" element={<Card_Content/>}/>
              <Route path="/cardcontent/classwork" element={<Card_Content/>}/>,
              <Route path="/cardcontent/people" element={<Card_Content/>}/>,
              <Route path="/archived" element={<Archived/>}/>,
            </Routes>
          </span>
         
        </span>
        
      </SidebarContext.Provider>
      
    </main>
  );
}

export default Home;
