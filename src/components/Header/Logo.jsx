import React from 'react';
import logoImg from './../../assets/image/logo-mechel.png'

const Logo = (props) => {
  return (
    <div className="Logo-box">
      <div className="Logo-img">
        <img src={logoImg} alt="Mechel Logo" />
      </div>
    </div>
  )
}

export default Logo;