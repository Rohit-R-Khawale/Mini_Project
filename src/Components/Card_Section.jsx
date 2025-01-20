import React from 'react'
import { Link } from 'react-router-dom';

function Card_Section() {
    

    // Data for The Cards 
    const cardData=[{Class:"Java Programming",owner:"PanitaJadhav"},{},{},{},{},
    ];
  return (
    <main className='w-full mx-auto bg-green-300 h-max overflow-auto py-3 '>
        <div className="p-2 flex flex-wrap  mx-2 ">
            {cardData.map((index,data)=>(
                <Cards key={index}{...data}/>
            ))}
        </div>
        
    </main>
  )}
  
export default Card_Section;

const Cards=(props)=>{
    return (
        <main className='w-72 bg-blue-400 h-80 overflow-hidden rounded-lg m-2'>
            <Link to="/cardcontent">
                <div className="w-full bg-red-500 h-28 ">
                    <p className='text-black mx-auto'>{props.Class}</p>
                    <p>{props.owner}</p>
                </div>
                <div className="w-full"></div>
            </Link>
        </main>
    )
}