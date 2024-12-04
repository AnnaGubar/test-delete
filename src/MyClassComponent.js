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

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    console.log("render");
    return (
      <div>
        <h2>{this.state.timer}</h2>
        <input value={this.state.input} onChange={this.onChangeHandler}></input>
        <button onClick={this.addTask}>Add todo</button>
        {this.state.todos.map((todo, index) => (
          <p key={index}>{todo}</p>
        ))}
      </div>
    );
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 1,
  //   };

  //   console.log("1 mounting - constructor");
  // }

  // componentDidMount() {
  //   console.log("1 mounting - componentDidMount");
  // }

  // // returns only boolean value
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.count !== nextProps.count) {
  //     console.log("2 updating - shouldComponentUpdate - no");
  //     return true; // render compo-nt
  //   }

  //   console.log("2 updating - shouldComponentUpdate - yes");
  //   return false; // not render compo-nt
  // }

  // render() {
  //   console.log("1 mounting - render");
  //   return <div>MyClassComponent</div>;
  // }
}
