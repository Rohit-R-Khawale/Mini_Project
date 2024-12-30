import React from 'react';
import { MdArchive } from "react-icons/md";
function Archived() {
return (
<main className='flex flex-col justify-center w-full h-full '>

    <MdArchive className='mx-auto text-9xl'/>
    <p className='mx-auto text-2xl text-gray-700 font-semibold'>No Archived Classes!</p>

</main>
);}

export default Archived;