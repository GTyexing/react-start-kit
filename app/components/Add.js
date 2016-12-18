import React from 'react';
import style from './add.css'

class Add extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className={style.add} onClick={this.props.add}>add</button>
    );
  }
}

module.exports = Add;
