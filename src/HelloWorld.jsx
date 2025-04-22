import React, { Component } from 'react';

class HelloWorld extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>Welcome, {this.props.name}</p>
      </div>
    );
  }
}

export default HelloWorld;
