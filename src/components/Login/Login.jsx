import React from 'react';
import { Redirect } from 'react-router-dom';

const Login = (props) => {

  const {username, password, asdtoken, error, loginChange, passwordChange, loginTC,  } = props;

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

  if (asdtoken != null) return <Redirect to="/WayLists" />
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div><label htmlFor="">Login: <input name="username" type="text" value={username} onChange={onChangeLogin} /></label></div>
        <div><label htmlFor="">Password: <input name="password" type="password" value={password} onChange={onChangePassword} /></label></div>  
        <button type="submit" >Submit</button>
        { error ? <div> <div><b>{error.response.status}</b></div> <div><b>{error.response.statusText}</b></div> </div> : null}
        <div>{asdtoken}</div> 
      </form>
    </div>
  );
};

export default Login;