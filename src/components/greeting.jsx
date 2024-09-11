import React, { Component } from "react";

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      loading: true,
    };

    console.log("I am first");
  }

  // updateState = () => {
  //   setTimeout(() => {
  //     this.setState({
  //       name: "Updated Pujan Prajapati",
  //     });
  //   }, 2000);
  // };

  componentDidMount = () => {
    console.log("I am thrid");
    this.setState({ loading: false });
  };

  componentDidUpdate = () => {
    console.log("I am fourth");
    // this.updateState();
  };

  componentWillUnmount = () => {
    console.log("I am fifth");
  };

  render() {
    console.log("I am second");

    return (
      <p>
        Hello, You can see the click me output on console : {this.state.name}
      </p>
    );
  }
}

export default Greeting;
