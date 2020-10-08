import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {getUserId, getIsAuth } from '../../redux/authSelectors';

let mapStateToProps = (state) => {
  return {
    userId: getUserId(state),
    isAuth: getIsAuth(state)
  }
}

const withAuthRedirectHoc = (WrappedComponent) => {

  class Component extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to='/login' />;
      return <WrappedComponent {...this.props}/>;
    }
  }

  let AuthComponent = connect(mapStateToProps)(Component)

  return AuthComponent;

}

export default withAuthRedirectHoc;

