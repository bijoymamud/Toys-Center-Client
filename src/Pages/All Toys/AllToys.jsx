import React, { useEffect, useState } from 'react';
import Toy from '../Toy/Toy';

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

      {
        toys.map(toy => <Toy
          key={toy._id}
          toy={toy}
        ></Toy>)
      }
    </div>
  );
};

export default AllToys;