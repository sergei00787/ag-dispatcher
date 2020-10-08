// import React from 'react';
import { connect } from 'react-redux';
import { loginChange, passwordChange, loginTC } from '../../redux/loginReducer'
import Login from './Login'

function mapStateToProps(state) {
  return {
    username: state.LoginState.username,
    password: state.LoginState.password,
    asdtoken: state.LoginState.asdtoken,
    error: state.LoginState.error
  };
}

export default connect(
  mapStateToProps, { loginChange, passwordChange, loginTC }
)(Login);