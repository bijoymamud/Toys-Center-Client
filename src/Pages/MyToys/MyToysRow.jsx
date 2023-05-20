import React from 'react';

const MyToysRow = ({ toyEmail, handleDelteToy }) => {

  const { _id, photo, toyName, price, category, quantity } = toyEmail;



  return (

    <tr>
      <th>
        <button onClick={() => handleDelteToy(_id)} className="btn btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

      </th>
      <td>


        <div className="avatar">
          <div className="w-24 rounded">
            <img className='mx-auto' src={photo} />
          </div>
        </div>


      </td>
      <td>

        {toyName}
      </td>
      <td>

        {category}
      </td>
      <td>${price}</td>

      <th>

        <button className="btn btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>



      </th>
    </tr>

  );
};

export default MyToysRow;