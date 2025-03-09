import React from 'react'
// this is not Done 
const Marks = () => {
  return (
    <main className='m-1'>
      <table className='border-all' cellPadding={3}>
        <tr className=''>
            <th className=''>Students</th>
            <th>Assignment 2</th>
            <th>Assignment 3</th>
            <th>Marks</th>
        </tr>
        {/*Map Students Data and render them (Take the data from the database and render it in the frontend) */}
        <tr>
            <td>a</td>
            <td>g</td>
            <td>g</td>
        </tr>
      </table>
    </main>
  )
}

export default Marks;
