import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { business: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/business")
      .then(res => {
        // console.log("qqeweqweqwe", res.data); //.data
        this.setState({ business: res.data });
      })
      .catch(err => console.log(err));
  }

  tabRow = () => {
    //rmb to return here (?map, filter, reduce those all needs return?)
    // console.log("====", this.state.business);
    return this.state.business.map((items, i) => {
      return <TableRow items={items} key={i} />;
    });
  };

  render() {
    return (
      <div>
        <h3>Business List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Person</th>
              <th>Business</th>
              <th>GST Number</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
