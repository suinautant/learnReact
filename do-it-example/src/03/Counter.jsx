import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // state 정의
    this.state = {
      count: 0,
    };
    this.increaseCount = this.increaseCount.bind(this);
  }

  increaseCount() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }

  render() {
    return (
      <div>
        <span>카운트 : {this.state.count}</span>
        <br />
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}

export default Counter;
