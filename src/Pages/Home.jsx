import React, { useState } from "react";
// importing Components
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Card_Section from "../Components/Card_Section";
//  importing Context from SidebarContext.js
import { SidebarContext } from "../Context/SidebarContext";

function Home() {
  // Used to Show/Hide Sidebar in the Webpage
  const [sidebarVisible, setSidebarVisible] = useState("visible");
  return (
    <main>
      <SidebarContext.Provider value={{ sidebarVisible, setSidebarVisible }}>
        <Navbar />
        <hr />
        
        <span className="flex w-screen max-sm:block">
          <Sidebar />
          <Card_Section/>
        </span>
        
      </SidebarContext.Provider>
      
    </main>
  );
}

export default Home;
