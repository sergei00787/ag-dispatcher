import { createStore, combineReducers, applyMiddleware } from 'redux';
import loginReducer from './loginReducer';
import schemaReducer from './schemaReducer';
import appReducer from './appReducer'
import vehiclesReducer from './vehiclesReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { compose } from 'redux';
import refuellingReducer from './refuellingReducer';



let reducers = combineReducers(
  {
    AppState: appReducer, // State APP - loginAG, PassAG, AG-Token
    LoginState: loginReducer,
    SchemaState: schemaReducer,
    VehiclesState: vehiclesReducer,
    RefuellingState: refuellingReducer,
    form: formReducer
  }
)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


window.store = store;
//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store; 