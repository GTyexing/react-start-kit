import React from 'react';

export default class Mult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.mult}>mult</button>
    );
  }
}
