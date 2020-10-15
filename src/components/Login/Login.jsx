import React from 'react';
import { Redirect } from 'react-router-dom';
import logoImg from './../../assets/image/logo-mechel.png'

const Login = (props) => {

  const { username, password, asdtoken, error, loginChange, passwordChange, loginTC, } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    loginTC(username, password);
    return <Redirect to="/refuelling" />
  }

  const onChangeLogin = (e) => {
    let username = e.currentTarget.value
    loginChange(username);
  }

  const onChangePassword = (e) => {
    passwordChange(e.currentTarget.value);
  }

  if (asdtoken != null) return <Redirect to="/refuelling" />
  return (
    <div className='Login-wrap'>
      <img src={logoImg} alt="Mechel Logo" className="Login-Logo"/>
      <form onSubmit={handleSubmit} className="LoginForm">        
        <label htmlFor="usernameLogin">Логин: <input name="username" type="text" value={username} onChange={onChangeLogin} id="usernemeLogin" /></label>
        <label htmlFor="passwordLogin">Пароль: <input name="password" type="password" value={password} onChange={onChangePassword} id="passwordLogin"/></label>
        <button type="submit" >Войти</button>
        {error ? <div> <div><b>{error.response.status}</b></div> <div><b>{error.response.statusText}</b></div> </div> : null}
        <div>{asdtoken}</div>
      </form>
    </div>
  );
};

export default Login;