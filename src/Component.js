import { Component } from "react";
export class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "CLASS component" };
  }

  render() {
    return <div className="class">{this.state.name}</div>;
  }
}

export const FuncComponent = () => {
  return <div className="func">FUNCTIONAL component</div>;
};
