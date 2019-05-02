import React, { Component } from "react";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", businessName: "", gstNum: "" };
  }
  render() {
    const { name, businessName, gstNum } = this.state;

    const onSubmit = e => {
      e.preventDefault();
      const data = {
        name,
        businessName,
        gstNum
      };
    };

    const onChange = e => {
      // this.setState({this.value})
    };
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>Add Person Name</label>
          <input type="text" onChange={this.onChange} name={businessName} />
        </div>
        <div>
          <label>Add Business Namr</label>
          <input type="text" onChange={this.onChange} name={businessName} />
        </div>
        <div>
          <label>Add GST Number</label>
          <input type="text" onChange={this.onChange} name={gstNum} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
