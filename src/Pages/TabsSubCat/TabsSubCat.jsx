import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import LogIn from '../Login/LogIn';
import { AuthContext } from '../providers/AuthProviders';

const TabsSubCat = ({ toys }) => {
  const { user } = useContext(AuthContext)

  const { _id, customerName, toyName, category, photo, price, quantity, rating, description } = toys;

  const handleDetails = () => {
    if (user) {
      return;

    }
    else {
      alert("You Have to login ");
      <LogIn></LogIn>
    }
  }
  return (
    <div>
      <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-slate-500 dark:text-gray-50">
        <img src={photo} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">{toyName}</span>
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">Price: ${price}</span>
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">Rating: {rating}</span>

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