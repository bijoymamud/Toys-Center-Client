import React from 'react';

const ToyRow = ({ toy }) => {
  const { customerName, toyName, category, photo, price, quantity } = toy;
  return (


    <tr>
      <th>

      </th>
      <td>
        <div className="flex items-start">
          <div className="avatar">

          </div>
          <div>
            <div className="font-semibold">{customerName}</div>

          </div>
        </div>
      </td>
      <td>

        {toyName}
      </td>
      <td>

        {category}
      </td>
      <td>{"$ " + price}</td>
      <td>{quantity}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>

  )
}

export default ToyRow;