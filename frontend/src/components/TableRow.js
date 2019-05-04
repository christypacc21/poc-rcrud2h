import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class TableRow extends Component {
  delete = () => {
    axios
      .get(`http://localhost:5000/business/delete/${this.props.items._id}`)
      .then(console.log("Deleted"))
      .catch(err => console.log(err));

    window.location.reload(); //temp method to refresh page
  };

  render() {
    const { personName, businessName, gstNum, _id } = this.props.items;
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
          <button className="btn btn-danger" onClick={this.delete}>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
