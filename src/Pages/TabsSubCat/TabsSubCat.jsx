import React, { useContext } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const TabsSubCat = ({ toys }) => {
  const { user } = useContext(AuthContext)

  const { _id, customerName, toyName, category, photo, price, quantity, rating, description } = toys;

  const handleDetails = () => {
    if (user) {
      return;

    }
    else {
      alert("You Have to login first ");

    }
  }
  return (
    <div className='text-start mb-24'>
      <div className="lg:max-w-xs p-6 rounded-md shadow-md   dark:bg-gray-900  ">
        <img src={photo} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-900" />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase text-white">{toyName}</span>
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">Price: ${price}</span>
          <div className=" flex items-center gap-1 text-xs font-medium tracking-widest uppercase dark:text-violet-400">Rating: {rating}<FaStar className='text-yellow-400'></FaStar></div>

        </div>

        {!user &&
          <Link to="/login" >
            <button onClick={handleDetails} className='btn-outline'>View Details</button>
          </Link>}


      </div>
    </div>
  );
};

export default TabsSubCat;