import React from 'react'

import { useResolvedPath} from  'react-router-dom'

// importing components
import Card_Navbar from './Card_Navbar';
import Stream from "../Pages/stream";
import Classwork from "../Pages/Classwork";
import People from "../Pages/People";
import Marks from "../Pages/Marks";
const Card_Content = () => {
  let component;
  let path=useResolvedPath();
  // console.log(path.pathname); // This is used to check the current path on which we are on 

  // This switch statement will switch the Component based on the Current path since we can only use one Rotes in an App 
  //For reference follow https://youtu.be/SLfhMt5OUPI
  switch(path.pathname) {
    case "/cardcontent":
      component = <Stream/>;
      break;
    case "/cardcontent/classwork":
      component = <Classwork/>;
      break;
    case "/cardcontent/people":
      component = <People/>;
      break;
    case "/cardcontent/marks":
      component = <Marks/>
  }
  
  return (
    <main className="w-full bg-blue-200 h-screen">
      <Card_Navbar/>
      <div className="overflow-y-auto h-full scroll-smooth" >
      <span>
        {/* The above switch statement changes this component */}
        {component}
      </span>
      </div>
      
    </main>
  )
}

export default Card_Content
