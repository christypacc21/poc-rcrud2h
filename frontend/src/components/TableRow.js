import React from "react";
import { Link } from "react-router-dom";

const TableRow = items => {
  console.log(items, "asdfasfd", items.items._id);
  const { personName, businessName, gstNum, _id } = items.items;
  return (
    <tr>
      <td>{personName}</td>
      <td>{businessName}</td>
      <td>{gstNum}</td>
      <td>
        <Link to={`/edit/${_id}`} className="btn btn-primary">
          Edit
        </Link>
      </td>
      <td>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
};

export default TableRow;
