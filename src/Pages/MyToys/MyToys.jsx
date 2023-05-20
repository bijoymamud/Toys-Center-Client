import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import MyToysRow from './MyToysRow';

const MyToys = () => {

  const [toysEmail, setToysEmail] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/toyEmail/${user.email}`)
      .then(res => res.json())
      .then(data => setToysEmail(data))

  }, [user])

  console.log(toysEmail);


  return (
    <div>
      {/* <h3>All toys are shown here{toys.length}</h3> */}

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>

              </th>
              <th>Saller</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>


            {
              toysEmail.map(toyEmail => <MyToysRow
                key={toyEmail._id}
                toyEmail={toyEmail}
              ></MyToysRow>)
            }

          </tbody>


        </table>
      </div>


    </div>
  );
};




export default MyToys;

