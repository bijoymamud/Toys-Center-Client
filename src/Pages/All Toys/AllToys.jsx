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
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
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