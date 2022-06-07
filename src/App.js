import "./App.css";
import React from "react";
import TestInput from "./component/TestInput";
import TestRadio from "./component/TestRadio";
import TestSelect from "./component/TestSelect";
import TestCheckbox from "./component/TestCheckbox";
//https://httpbin.org/post
class TestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",
        phone: "",
        email: "abc@test.com",
        select: "",
        fruit: ["apple", "banana"],
        color: "",
      },
      errors: {
        name: "",
        phone: "",
        email: "",
        select: "",
        fruit: "",
        color: "",
      },
    };
  }
  handleValidation() {
    let flagHasError = false;
    let fields = this.state.fields;
    let errors = [];
    for (const field in fields) {
      if (!fields[field]) {
        flagHasError = true;
        errors[field] = field.concat(" is empty");
        this.setState({ errors: errors });
      } else {
        errors[field] = "";
        this.setState({ errors: errors });
      }
    }
    if (errors["fruit"] === "" && fields["fruit"].length < 2) {
      flagHasError = true;
      errors["fruit"] = "need to check at least two fruits";
      this.setState({ errors: errors });
    } else {
      errors["fruit"] = "";
      this.setState({ errors: errors });
    }
    return !flagHasError;
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidation()) {
      alert("Success");
      this.makeRequest(this.state);
    } else {
      alert("Error");
    }
    console.log(this.state);
  };
  makeRequest(data) {
    fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("Success:", JSON.parse(response.data));
      });
  }
  handleChange = (value, field) => {
    let fields = { ...this.state.fields };
    //fields = Object.assign({}, this.state.fields)
    fields[field] = value;
    this.setState({
      fields: fields,
    });
  };
  handleCheckbox = (e) => {
    let { value, checked } = e.target;
    if (checked) {
      let fields = { ...this.state.fields };
      fields["fruit"].push(value);
      this.setState({
        fields: fields,
      });
    } else {
      let filteredItems = this.state.fields["fruit"].filter(
        (item) => item !== value
      );
      this.setState({
        fields: {
          ...this.state.fields,
          fruit: filteredItems,
        },
      });
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <span>Select: </span>
          <TestSelect
            value={this.value}
            error={this.state.errors["select"]}
            field="select"
            onTestSelectChange={this.handleChange}
          />
        </div>
        <div>
          <span>Name: </span>
          <TestInput
            value={this.state.fields.name}
            error={this.state.errors["name"]}
            field="name"
            onTestInputChange={this.handleChange}
          />
          <span>Phone: </span>
          <TestInput
            value={this.state.fields.phone}
            error={this.state.errors["phone"]}
            field="phone"
            onTestInputChange={this.handleChange}
          />
          <span>Email: </span>
          <TestInput
            value={this.state.fields.email}
            error={this.state.errors["email"]}
            field="email"
            onTestInputChange={this.handleChange}
          />
        </div>
        <div>
          <span>Please select at least two fruits: </span>
          <TestCheckbox
            value={this.state.fields.fruit}
            error={this.state.errors["fruit"]}
            field="fruit"
            onTestCheckboxChange={this.handleCheckbox}
          />
        </div>
        <div>
          <span>Please select a color</span>
          <TestRadio
            value={this.state.fields.color}
            error={this.state.errors["color"]}
            field="color"
            onTestRadioChange={this.handleChange}
          />
        </div>
        <button type="submit">Register Now</button>
      </form>
    );
  }
}
export default TestForm;
