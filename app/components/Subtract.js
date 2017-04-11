import React from 'react';

class Subtract extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.subtract}>subtract</button>
    );
  }
}

export default Subtract;