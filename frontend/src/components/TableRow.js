import React from "react";

const TableRow = items => {
  const { personName, businessName, gstNum } = items.items;
  // console.log("haha", personName);
  return (
    <tr>
      <td>{personName}</td>
      <td>{businessName}</td>
      <td>{gstNum}</td>
      <td>
        <button className="btn btn-primary">Edit</button>
      </td>
      <td>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
