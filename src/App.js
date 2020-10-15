import React from 'react';
import './App.scss';
import { initializeApp } from './redux/appReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Spinner, Alert } from 'react-bootstrap';
import LoginScreen from './components/LoginScreen';
import MainScreen from './components/MainScreen';


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
          {!this.props.isAuth? <LoginScreen /> : <MainScreen />  }         
                   
        </div>
      );
    }
  }
}


const mapStateToProps = (state) => {
  return {
    initialized: state.AppState.initialized,
    error: state.AppState.error,
    isInitInProgress: state.AppState.isInitInProgress,
    isAuth: state.LoginState.isAuth
  }
}

export default compose(connect(mapStateToProps, { initializeApp })/*, withRouter*/)(App);
