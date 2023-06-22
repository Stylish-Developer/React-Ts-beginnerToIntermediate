// -- CLASS COMPONENT

import { Component } from "react";

// -- types
interface CounterProps {
  message: string;
}
interface CounterState {
  count: number;
}

class Counter extends Component<CounterProps, CounterState> {
  constructor(props: any) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <>
        <p>Method 1 - counter example</p>
        <div>
          <button
            onClick={() => {
              this.setState(
                (prevState) => ({
                  count: prevState.count + 1,
                }),
                () => {
                  alert(`Count value is ${this.state.count}`);
                }
              );
            }}
          >
            Add
          </button>
          <button
            onClick={() => {
              this.setState(
                (prevState) => ({
                  count: prevState.count - 1,
                }),
                () => {
                  alert(`Count value is ${this.state.count}`);
                }
              );
            }}
          >
            Subtract
          </button>
        </div>
        <h3>
          {this.props.message} {this.state.count}
        </h3>
      </>
    );
  }
}

export default Counter;
