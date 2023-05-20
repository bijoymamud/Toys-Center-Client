import React, { useEffect, useState } from 'react';
import ToyRow from '../Toy/ToyRow';

const AllToys = () => {

  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toyinfo")


      .then(res => res.json())
      .then(data => setToys(data))




  }, [])
  return (
    <div>
      <h3>All toys are shown here{toys.length}</h3>

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
              toys.map(toy => <ToyRow
                key={toy._id}
                toy={toy}
              ></ToyRow>)
            }

          </tbody>


        </table>
      </div>


    </div>
  );
};

export default AllToys;