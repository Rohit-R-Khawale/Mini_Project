// import React from 'react'

// const Classwork = () => {
//   return (
//     <div>
//       <p>This is Classwork</p>
//     </div>
//   )
// }

// export default Classwork


// import React, { useState } from 'react';

// const DropdownMenu = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const handleToggle = () => {
//     setIsOpen(isOpen);
//   };

//   const menuItems = [
//     'Assignment',
//     'Quiz assignment',
//     'Question',
//     'Material',
//     'Reuse post',
//     'Topic',
//   ];

//   return (
//     <div className="relative inline-block text-left">
//       <button
//         onClick={handleToggle}
//         className="inline-flex justify-items-center w-32 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
//       >
//         + Create
//       </button>

//       {isOpen && (
//         <div className="absolute right-0 z-10 w-48 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
//           <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
//             {menuItems.map((item) => (
//               <a
//                 key={item}
//                 href="#"
//                 className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                 role="menuitem"
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// const App = () => {
//   return (
//     <div className="flex justify-center min-h-screen bg-gray-100 p-5">
//       <DropdownMenu />
//       <div className="mt-6 text-center">
//         <h1 className="text-lg font-semibold">This is where you’ll assign work</h1>
//         <p className="text-gray-600">You can add assignments and other work for the class, then organize it into topics.</p>
//       </div>
//     </div>
//   );
// }


// const Dashboard = () => {
//     return (
//       <div className="flex flex-col items-center p-5">



//         {/* Create Button */}
//         <button className="bg-blue-500 text-white rounded-full px-4 py-2 mb-5 hover:bg-blue-600">
//           + Create
//         </button>
  
//         {/* Card */}
//         <div className="bg-white shadow-md rounded-lg p-5 w-4/6">
//           <div className="flex items-center mb-3">
//             <div className="bg-blue-200 rounded-full h-10 w-10 flex items-center justify-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-blue-600"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {/* Icon can be added here */}
//               </svg>
//             </div>
//             <h2 className="text-lg font-semibold ml-3">rohit</h2>
//           </div>
//           <p className="text-gray-500">No due date</p>
//           <p className="text-black my-2">gbngfrhn</p>
//           <div className="flex justify-between text-gray-600">
//             <p>0 Turned in</p>
//             <p>0 Assigned</p>
//           </div>
//           <button className="text-blue-500 mt-3 hover:underline">
//             View instructions
//           </button>
//         </div>
//       </div>
//     );
//   };
 

//  export default Dashboard;

// import React, { useState } from "react";

// const DropdownMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleToggle = () => {
//     setIsOpen((prev) => !prev); // Correctly toggling the state
//   };

//   const menuItems = [
   
//   ];

//   return (
//     <div className="relative inline-block text-left">
//       <button
//         onClick={handleToggle}
//         className="inline-flex justify-center w-32 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
//       >
//         + Create
//       </button>

//       {isOpen && (
//         <div className="absolute right-0 z-50 w-48 mt-2 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
//           <div className="py-1" role="menu" aria-orientation="vertical">
//             {menuItems.map((item) => (
//               <button
//                 key={item}
//                 className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                 role="menuitem"
//               >
//                 {item}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev); // Toggle the menu
  };

  // Define menu items as an array of objects
  const menuItems = [
    { label: "Assignment", path: "/Assignment" },
    { label: "Quiz Assignment", path: "quiz-assignment" },
    { label: "Question", path: "/question" },
    { label: "Material", path: "/Material" },
    { label: "Reuse Post", path: "/reuse-post" },
    { label: "Topic", path: "/topic" },
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={handleToggle}
        className="inline-flex justify-center w-32 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
      >
        + Create
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 w-48 mt-2 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {menuItems.map((item) => (
              <Link
                key={item.path} // Unique key
                to={item.path} // Use 'to' instead of 'href'
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};







const Dashboard = () => {
  return (
    <div className="flex flex-col items-center p-5 min-h-screen bg-gray-100">
      {/* Dropdown Menu Button */}
      <DropdownMenu />

      {/* Card */}
      <div className="bg-white shadow-md rounded-lg p-5 w-4/6 mt-5">
        <div className="flex items-center mb-3">
          <div className="bg-blue-200 rounded-full h-10 w-10 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
          <h2 className="text-lg font-semibold ml-3">Rohit</h2>
        </div>
        <p className="text-gray-500">No due date</p>
        <p className="text-black my-2">gbngfrhn</p>
        <div className="flex justify-between text-gray-600">
          <p>0 Turned in</p>
          <p>0 Assigned</p>
        </div>
        <button className="text-blue-500 mt-3 hover:underline">
          View instructions
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
