import React from "react";

const checkboxContent = ["apple", "pear", "berry", "banana", "peach"];
class TestCheckbox extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange = (e) => {
    this.props.onTestCheckboxChange(e);
  };
  render() {
    return (
      <div>
        {checkboxContent.map((item) => (
          <div key={item}>
            <input
              value={item}
              checked={
                this.props.value &&
                this.props.value.findIndex(
                  (selectedItem) => item === selectedItem
                ) >= 0
                  ? true
                  : false
              }
              type="checkbox"
              onChange={this.handleChange}
            />
            <span>{item}</span>
          </div>
        ))}
        <span style={{ color: "red" }}>{this.props.error}</span>
      </div>
    );
  }
}

export default TestCheckbox;
