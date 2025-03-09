import React from 'react'
import { Outlet } from 'react-router-dom';


// importing components
import Card_Navbar from './Card_Navbar';

const Card_Content = () => {

  // let component;
  // let path=useResolvedPath();
  // console.log(path.pathname); // This is used to check the current path on which we are on 

  // This switch statement will switch the Component based on the Current path since we can only use one Rotes in an App 
  //For reference follow https://youtu.be/SLfhMt5OUPI
 
  
  return (
    <main className="w-full bg-blue-200 h-screen">
      <Card_Navbar/>
      <div className="overflow-y-auto h-full scroll-smooth" >
      <span>
        <Outlet/>
      </span>
      </div>
      
    </main>
  )
}

export default Card_Content
