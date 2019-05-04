import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = { personName: "", businessName: "", getNum: "" };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/business/edit/${this.props.match.params.id}`) //to get the id from the queryString
      .then(res => {
        this.setState({
          personName: res.data.personName,
          businessName: res.data.businessName,
          gstNum: res.data.gstNum
        });
      })
      .catch(err => console.log(err));
  }

  onSubmit = e => {
    e.preventDefault();
    const data = {
      personName: this.state.personName,
      businessName: this.state.businessName,
      gstNum: this.state.gstNum
    };
    axios
      .post(
        `http://localhost:5000/business/update/${this.props.match.params.id}`,
        data
      )
      .then(res => {
        console.log("Sucessfully updated:", res);
      })
      .catch(err => console.log("Update failed:", err));
    this.props.history.push("/index");
    window.location.reload(); //temporary solution to make the data refresh
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { personName, businessName, gstNum } = this.state;
    return (
      <div>
        <h3>Update item: {this.props.match.params.id}</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Edit Person Name </label>
            <input
              type="text"
              onChange={this.onChange}
              name="personName"
              value={personName || ""}
            />
          </div>
          <div>
            <label>Edit Business Name </label>
            <input
              type="text"
              onChange={this.onChange}
              name="businessName"
              value={businessName || ""}
            />
          </div>
          <div>
            <label>Edit GST Number </label>
            <input
              type="text"
              onChange={this.onChange}
              name="gstNum"
              value={gstNum || ""}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Enter" />
        </form>
      </div>
    );
  }
}

export default withRouter(Edit);
