import React from "react";

const selectContent = [1, 2, 3, 4, 5];
class TestSelect extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange = (e) => {
    this.props.onTestSelectChange(e.target.value, this.props.field);
  };
  render() {
    return (
      <div>
        <select onChange={this.handleChange}>
          <option key="0">Please Select</option>
          {selectContent.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <span style={{ color: "red" }}>{this.props.error}</span>
      </div>
    );
  }
}

export default TestSelect;
