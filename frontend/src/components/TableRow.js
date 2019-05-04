import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Coz there is no state and no need a constructor, I change from using class component to functional compoennet
const TableRow = data => {
  const { personName, businessName, gstNum, _id } = data.items;

  const Delete = () => {
    axios
      .get(`http://localhost:5000/business/delete/${_id}`)
      .then(console.log("Deleted"))
      .catch(err => console.log(err));

    window.location.reload(); //temp method to refresh page
  };

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
        <button className="btn btn-danger" onClick={Delete}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
