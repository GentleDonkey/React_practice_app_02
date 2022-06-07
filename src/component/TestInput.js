import React from "react";

class TestInput extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange = (e) => {
    this.props.onTestInputChange(e.target.value, this.props.field);
  };
  render() {
    return (
      <div>
        <input
          name={this.props.field}
          value={this.props.value}
          onChange={this.handleChange}
        ></input>
        <span style={{ color: "red" }}>{this.props.error}</span>
      </div>
    );
  }
}

export default TestInput;
