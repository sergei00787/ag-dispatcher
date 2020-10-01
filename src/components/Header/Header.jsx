import React from 'react';
import Navbar from './Navi';
import Logo from './Logo';
import User from './User';

const Header = (props) => {
  return (
    <header 
      className="Header d-flex flex-column flex-md-row justify-content-between align-items-sm-start p-3">
      <Logo />
      <Navbar />
      <User />
    </header>
  );
};

export default Header;