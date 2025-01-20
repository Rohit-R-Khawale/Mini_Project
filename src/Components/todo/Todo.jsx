import React from 'react'

import { useResolvedPath} from  'react-router-dom'

// importing components
import Todo_Navbar from './TodoNavbar';
import Assigned from "./Assigned.jsx";
import Missing from "./Missing.jsx";
import Done from "./Done.jsx";
const Card_Content = () => {
  let component;
  let path=useResolvedPath();
  // console.log(path.pathname); // This is used to check the current path on which we are on 

  // This switch statement will switch the Component based on the Current path since we can only use one Rotes in an App 
  //For reference follow https://youtu.be/SLfhMt5OUPI
  switch(path.pathname) {
    case "/todo":
      component = <Assigned/>;
      break;
    case "/todo/missing":
      component = <Missing/>;
      break;
    case "/todo/done":
      component = <Done/>;
      break;
  }
  
  return (
    <main className="w-full bg-blue-200 h-screen">
      <Todo_Navbar/>
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
