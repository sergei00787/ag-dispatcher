
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navi';
import Logo from './Logo';
import User from './User';
import { logoutTC } from './../../redux/loginReducer';



function mapStateToProps(state) {
  return {
    username: state.LoginState.username,
  };
}

class Header extends Component {
  render() {
    return (
      <header
        className="Header d-flex flex-column flex-md-row justify-content-between align-items-sm-start p-3">
        <Logo />
        <Navbar />
        <User username={this.props.username} logout={this.props.logoutTC} />
      </header>
    );
  }
}

export default connect(
  mapStateToProps, { logoutTC }
)(Header);