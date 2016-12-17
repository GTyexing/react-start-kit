import React from 'react';

export default class Subtract extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.subtract}>subtract</button>
    );
  }
}
