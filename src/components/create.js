import React, { Component } from "react";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = { personName: "", businessName: "", gstNum: "" };
  }
  render() {
    const { personName, businessName, gstNum } = this.state;

    const onSubmit = e => {
      e.preventDefault();
      const data = {
        personName,
        businessName,
        gstNum
      };
    };

    const onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>Add Person Name</label>
          <input
            type="text"
            onChange={this.onChange}
            name="personName"
            value={businessName}
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
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
