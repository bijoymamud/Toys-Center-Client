import React from 'react';

const Toy = ({ toy }) => {

  const { photo, toyName, price, category, quantity, customerName } = toy;
  return (
    <div className="overflow-x-auto">

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
            {/* row 1 */}
          
          
          </tbody>


        </table>
      </div>
    </div>
  );
};

export default Toy;