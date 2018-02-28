import React from "react";

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.props.onAdd(this.state.value);
      this.setState({ value: "" });
    }
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleKeyDown.bind(this)}
      />
    );
  }
}
