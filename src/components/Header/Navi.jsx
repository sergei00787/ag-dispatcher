import React from 'react';
import {NavLink} from 'react-router-dom'


const Navi = (props) => {
  return (
    <ul className="Navi list-unstyled d-flex flex-column flex-sm-row 
      justify-content-center .align-items-start p-2">
      <li><NavLink className="Navi-Link" to="/refuelling">Заправки</NavLink></li>
      <li><NavLink className="Navi-Link" to="/waylists">Путевые листы</NavLink></li>      
      <li><NavLink className="Navi-Link" to="/vehicles">Транспорт</NavLink></li>
      <li><NavLink className="Navi-Link" to="/logs">Логи</NavLink></li>
    </ul>
  );
};

export default Navi;