import React from 'react';
import './App.scss';
import Header from './components/Header/Header'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Vehicles from './components/Vehicles/Vehicles';
import Refuelling from './components/Refuelling/Refuelling';
import { initializeApp } from './redux/appReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Spinner, Alert } from 'react-bootstrap';

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


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
    setInterval(this.props.initializeApp, 300000);
  }

  render() {

    if (this.props.isInitInProgress) {
      return (
        <div>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>)
    } else {
      if (this.props.initialized === false) {
        if (this.props.error) return <Alert variant="warning">Error: {this.props.error.message}</Alert>
      }

      return (
        <div className="App">
          <BrowserRouter>
            <Header />
            <Switch>
              {/* <Route path="/login">
                  <LoginContainer />
                  <div></div>
                </Route> */}
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
    }




  }
}


const mapStateToProps = (state) => {
  return {
    initialized: state.AppState.initialized,
    error: state.AppState.error,
    isInitInProgress: state.AppState.isInitInProgress
  }
}

export default compose(connect(mapStateToProps, { initializeApp })/*, withRouter*/)(App);
