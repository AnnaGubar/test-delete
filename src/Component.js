import { Component } from "react";
export class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "I am a CLASS component" };
  }

  render() {
    return <div>{this.state.name}</div>;
  }
}

export const FuncComponent = () => {
  return <div>I am a FUNCTIONAL component</div>;
};
