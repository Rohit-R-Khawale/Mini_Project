import React from 'react'
function Card_Section() {


    // Data for The Cards 
    const cardData=[
        {}
    ];
  return (
    <main className='w-full bg-green-300 h-screen'>
        <div className="p-2 flex">
            {cardData.map((index,data)=>(
                <Cards key={index}{...data}/>
            ))}
        </div>
    
    </main>
  )}

export default Card_Section;

const Cards=()=>{
    return (
        <main className='w-72 bg-blue-400 h-80 overflow-hidden rounded-lg'>
            <div className="w-full bg-red-500 h-28 ">
                <p></p>
            </div>
            <div className="w-full"></div>
        </main>
    )
}