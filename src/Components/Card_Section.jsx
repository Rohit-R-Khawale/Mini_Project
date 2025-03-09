import React ,{useState,useEffect}from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Card_Section() {

    const [cardData, setCardData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:4000/card_data");
            setCardData(response.data); // Update state with API response
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
        
        fetchData();
      }, []); // Empty dependency array means this runs once on mount


     
    
    // Data for The Cards 
   
  return (
    <main className='w-full mx-auto h-max overflow-auto py-3 '>
        <div className="p-2 flex flex-wrap  mx-2 ">
            {Array.isArray(cardData) && cardData.map((data,index)=>(
                <Cards key={index}{...data}/>
            ))}
        </div>
      
    </main>
  )}

export default Card_Section;

const Cards=(props)=>{

    return (
        <main className='w-72 bg-blue-400 h-80 overflow-hidden rounded-lg m-2 shadow-md shadow-black hover:shadow-xl'>
            <Link to={`/cardcontent/${props.id}`}>
                <div className="w-full bg-red-500 h-28 p-3 ">
                    <p className='text-black mx-auto font-bold text-xl text-white'>{props.subject_Name}</p>
                    <p className='text-white'>{props.Name}</p>
                </div>
                <div className="w-full"></div>
            </Link>
        </main>
    )
}