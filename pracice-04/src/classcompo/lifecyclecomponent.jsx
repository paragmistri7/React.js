import React, { Component } from "react";

class Lifecyclecomponent extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = { data: <h3>change data on click</h3> };
  }

  // componentWillMount() {
  //     console.log("componentWillMount");
  // }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
    // return false;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  clickHandle = () => {
    console.log("clicked");
    this.setState({ data: <h1>check in......</h1> });
  };

  render() {
    console.log("render");
    return (
      <div>
        Return
        <br />
        <input type="text" name="" id="" />
        <br />
        {this.state.data}
        <br />
        <button onClick={this.clickHandle}>Click</button>
      </div>
    );
  }
}

export default Lifecyclecomponent;
