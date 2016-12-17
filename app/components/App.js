import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import style from '../main.css';

//import actionCreators
import * as actionaa from '../actions/actionApp'
import * as actionm from '../actions/actions'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { app } = this.props;
    return (
      <div className = {style.container}>
        <Link to="/">add</Link>
        <Link to="/subtract">subtract</Link>
        <Link to="/mult">mult</Link>
        <div>
          {React.cloneElement(this.props.children, this.props)}
        </div>
        <h1>{ app }</h1>
      </div>
    );
  }
}

const mapStateToProps = ({app}) => ({app});

const actionCreators = { ... actionaa, ...actionm };

const  mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

