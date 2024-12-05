import { Component } from "react";

export class MyClassComponent extends Component {
  state = {
    todos: [],
    input: "",
    timer: 0,
  };

  componentDidMount() {
    console.log("componentDidMount");

    this.intervalId = setInterval(() => {
      this.setState((prevstate) => ({ timer: prevstate.timer + 1 }));
    }, 1000);

    const lsTodos = localStorage.getItem("todos");
    if (lsTodos) {
      this.setState({ todos: JSON.parse(lsTodos) });
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.count !== nextProps.count) {
  //     console.log("2 updating - shouldComponentUpdate - no");
  //     return true; // render compo-nt
  //   }

  //   console.log("2 updating - shouldComponentUpdate - yes");
  //   return false; // not render compo-nt
  // }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      console.log("componentDidUpdate");

      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  onChangeHandler = (e) => {
    const value = e.target.value;
    this.setState({ input: value });
  };

  addTask = () => {
    this.setState({ todos: [...this.state.todos, this.state.input] });
    this.setState({ input: "" });
  };

  stopCounter = () => {
    clearInterval(this.intervalId);
  };

  // componentWillUnmount() {
  //   clearInterval(this.intervalId);
  // }

  render() {
    console.log("render");
    return (
      <div>
        <div className="counter">
          <p>{this.state.timer}</p>
          <button onClick={this.stopCounter}>Stop counter</button>
        </div>

        <input value={this.state.input} onChange={this.onChangeHandler}></input>
        <button onClick={this.addTask}>Add todo</button>
        {this.state.todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
      </div>
    );
  }
}
