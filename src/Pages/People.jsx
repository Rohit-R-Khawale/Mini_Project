import React, { useEffect, useState } from 'react'

const People = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/cardcontent/people')
    .then(res=> res.json())
    .then(data=>setData(data))
    .catch(err => console.error(err))
  },[])

  return (
    <main  className='border-all p-1 flex flex-col '>
      <table>
        <thead>
          <th>Sr. No</th>
          <th>Name</th>
          <th>Email</th>
        </thead>

        <tbody>
          {data.map((d, i) =>(
        
            <tr key={i}>
              <td>{i+1}</td>
              <td>{d.Name}</td>
              <td>{d.Email}</td>
            </tr>
          ))}


        </tbody>
      </table>
    </main>
  )
}

export default People
