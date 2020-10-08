import React from 'react';
import Header from './Header/Header'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Vehicles from './Vehicles/Vehicles';
import Refuelling from './Refuelling/Refuelling';


const shifts = [
  { id: 12, date: '21.09.2020', shift: '4' },
  { id: 11, date: '21.09.2020', shift: '3' },
  { id: 10, date: '21.09.2020', shift: '2' },
  { id: 9, date: '21.09.2020', shift: '1' },
  { id: 8, date: '20.09.2020', shift: '4' },
  { id: 7, date: '20.09.2020', shift: '3' },
  { id: 6, date: '20.09.2020', shift: '2' },
  { id: 5, date: '20.09.2020', shift: '1' },
  { id: 4, date: '19.09.2020', shift: '4' },
  { id: 3, date: '19.09.2020', shift: '3' },
  { id: 2, date: '19.09.2020', shift: '2' },
  { id: 1, date: '19.09.2020', shift: '1' },
];

const MainScreen = props => {
  return (
    <div>
      <BrowserRouter>
            <Header />
            <Switch>
              <Route path="/vehicles">
                <Vehicles />
              </Route>
              <Route path="/waylists">
                <div>WAYLIST</div>
              </Route>
              <Route path="/logs">
                <div>LOGS</div>
              </Route>
              <Route path="/refuelling">
                <Refuelling shifts={shifts} />
              </Route>
              <Redirect from="/" to="/refuelling"></Redirect>
            </Switch>
          </BrowserRouter>
    </div>
  );
};


export default MainScreen;