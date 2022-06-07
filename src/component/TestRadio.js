import React from "react";

const radioContent = ["red", "green", "blue", "yellow", "pink"];
class TestRadio extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange = (e) => {
    this.props.onTestRadioChange(e.target.value, this.props.field);
  };
  render() {
    return (
      <div>
        {radioContent.map((item) => (
          <div key={item}>
            <input
              value={item}
              type="radio"
              checked={item === this.props.value}
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

export default TestRadio;
