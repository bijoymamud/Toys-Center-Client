import React from 'react';

const MyToysRow = ({ toyEmail }) => {

  const { photo } = toyEmail;

  return (

    <tr>
      <th>

      </th>
      <td>
        <div className="flex items-start">
          {/* <div className="avatar">
            <img className="avatar" src={photo} alt="" />
          </div> */}

          <div className="avatar">
            <div className="w-24 rounded">
              <img className='' src={photo} />
            </div>
          </div>
          <div>
            <div className="font-semibold">{ }</div>

          </div>
        </div>
      </td>
      <td>

        { }
      </td>
      <td>

        { }
      </td>
      <td>{ }</td>
      <td>{ }</td>
      <th>

        {/* <button className="btn btn-ghost btn-xs">details</button> */}


      </th>
    </tr>

  );
};

export default MyToysRow;