import React from 'react';
import style from './add.css'

export default class Add extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className={style.add} onClick={this.props.add}>add</button>
    );
  }
}
