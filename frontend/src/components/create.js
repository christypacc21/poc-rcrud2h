import React, { Component } from "react";
import axios from "axios";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personName: "",
      businessName: "",
      gstNum: "",
      greenMsg: false
    };
  }

  onSubmit = e => {
    // the functions here not use const, coz it is a function in a class(?why then not need?)å
    e.preventDefault();
    const data = {
      personName: this.state.personName,
      businessName: this.state.businessName,
      gstNum: this.state.gstNum
    };
    console.log(
      `The values are ${this.state.personName}, ${
        this.state.businessName
      }, and ${this.state.gstNum}`
    );

    axios
      .post("http://localhost:5000/business/add", data)
      .then(res => {
        console.log(res.data);
        this.setState({ greenMsg: true });
      })
      .catch(err => console.log("cannot add data:", err));

    this.setState({
      personName: "",
      businessName: "",
      gstNum: ""
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { personName, businessName, gstNum, greenMsg } = this.state;
    return (
      <div>
        {greenMsg ? <GreenMsg /> : ""}
        <br />
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Add Person Name</label>
            <input
              type="text"
              onChange={this.onChange}
              name="personName"
              value={personName}
            />
          </div>
          <div>
            <label>Add Business Namr</label>
            <input
              type="text"
              onChange={this.onChange}
              name="businessName"
              value={businessName}
            />
          </div>
          <div>
            <label>Add GST Number</label>
            <input
              type="text"
              onChange={this.onChange}
              name="gstNum"
              value={gstNum}
            />
          </div>
          <input type="submit" value="Submit to Add" />
        </form>
      </div>
    );
  }
}

const GreenMsg = () => {
  return (
    <div style={{ backgroundColor: "lightgreen" }}>
      <h2 style={{ textAlign: "center" }}>Succesfully Added Data!</h2>
    </div>
  );
};
