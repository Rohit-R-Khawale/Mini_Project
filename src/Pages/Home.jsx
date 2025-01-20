import React, { useState } from "react";
import {Route, Routes,Outlet } from "react-router-dom";
// importing Components
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
//  importing Context from SidebarContext.js
import { SidebarContext } from "../Context/SidebarContext";

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
          <span className="w-full">
          {/* Note: You can use Outlet to render the child routes of the parent route */}
          <Outlet />

          </span>
        </span>
        
      </SidebarContext.Provider>
      
    </main>
  );
}

export default Home;
