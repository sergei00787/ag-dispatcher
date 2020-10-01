import React from 'react';
import { Redirect } from 'react-router-dom';

const Login = (props) => {

  const {loginChange, passwordChange, login, password, agToken, getAgToken, error } = props;

  const handleSubmit = (e) => {
    getAgToken(login, password);    
    e.preventDefault();
    
  }

  const onChangeLogin = (e) => {
    let lg = e.currentTarget.value
    loginChange(lg);
  }

  const onChangePassword = (e) => {
    passwordChange(e.currentTarget.value);
  }

  if (agToken != null) return <Redirect to="/WayLists" />
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div><label htmlFor="">Login: <input name="Login" type="text" value={login} onChange={onChangeLogin} /></label></div>
        <div><label htmlFor="">Password: <input name="Password" type="password" value={password} onChange={onChangePassword} /></label></div>  
        <button type="submit" >Submit</button>
        {/* { error !== null ? <div> <div><b>{error.response.status}</b></div> <div><b>{error.response.statusText}</b></div> </div> : null} */}
        <div>{agToken}</div> 
      </form>
    </div>
  );
};

export default Login;