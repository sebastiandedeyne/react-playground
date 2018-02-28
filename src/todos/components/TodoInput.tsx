import React from "react";

interface Props {
  onAdd: (name: string) => void;
}

interface State {
  value: string;
}

export default class TodoInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { value: "" };
  }

  handleChange(e: HTMLElementEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }

  handleKeyDown(e: KeyboardEvent) {
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
