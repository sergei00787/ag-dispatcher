import React from 'react';
import { connect } from 'react-redux';
import { loginChange, passwordChange, loginTC } from '../../redux/loginReducer'
import Login from './Login'

function mapStateToProps(state) {
  return {
    login: state.LoginState.login,
    password: state.LoginState.password,
    agToken: state.LoginState.agToken,
    error: state.LoginState.error
  };
}

const LoginContainer = (props) => {
  return (
    <div>
      <Login login={props.login}
        password={props.password}
        agToken={props.agToken}
        loginChange={props.loginChange}
        passwordChange={props.passwordChange}
        getAgToken={props.loginTC}
        error = {props.error} />
    </div>
  );
}


export default connect(
  mapStateToProps, { loginChange, passwordChange, loginTC }
)(LoginContainer);