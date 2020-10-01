import React from 'react';
import { Button } from 'react-bootstrap';

const User = (props) => {
  return (
    <div className="User">
      <div className="User-box d-flex flex-row justify-content-end align-items-end">
        <span className="mr-1">Сергей Буймов</span>
        <Button className="ml-1" variant="primary">Выход</Button>
      </div>
    </div>
  )
}

export default User;