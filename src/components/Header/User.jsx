import React from 'react';
import { Button } from 'react-bootstrap';



const User = (props) => {

  const handleClickLogout = (e) => {
    e.preventDefault();    
    props.logout();
  }

  return (
    <div className="User">
      <div className="User-box d-flex flex-row justify-content-end align-items-end">
        <span className="mr-1">{props.username}</span>
        <Button className="ml-1" variant="primary" onClick={handleClickLogout}>Выход</Button>
      </div>
    </div>
  )
}

export default User;