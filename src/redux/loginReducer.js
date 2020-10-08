import { loginAsdApi } from '../api/apiAsdMechel'

const initialState = { 
  username: 'asd', 
  password: 'asd', 
  asdtoken: null, 
  error: null, 
  isAuth: false }
//const initialState = { login: 'demo', password: 'demo', agToken: null, error: null }

const LOGIN_SUCCESS = 'agDispatcher/Login/LOGIN_SUCCESS';
const USERNAME_CHANGE = 'agDispatcher/Login/USERNAME_CHANGE';
const PASSWORD_CHANGE = 'agDispatcher/Login/PASSWORD_CHANGE';
const SET_TOKEN = 'agDispatcher/Login/SET_ASD_TOKEN';
const SET_ERROR = 'agDispatcher/Login/SET_ERROR';
const LOGOUT_ASD = 'agDispatcher/Login/LOGOUT_ASD';

export default (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_SUCCESS:
      return { ...state };

    case USERNAME_CHANGE:
      return {
        ...state,
        username: action.username
      };

    case PASSWORD_CHANGE:
      return {
        ...state,
        password: action.password
      };

    case SET_TOKEN:
      return {
        ...state,
        asdtoken: action.asdtoken,
        isAuth: true
      };

      case SET_ERROR:
        return {
          ...state,
          error: action.errMessage
        };
      
      case LOGOUT_ASD:
        return {
          ...state,
          asdtoken: null,
          isAuth: false
        }

    default:
      return state
  }
};

export const loginChange = (username) => ({ type: USERNAME_CHANGE, username });
export const passwordChange = (password) => ({ type: PASSWORD_CHANGE, password });
export const setAsdToken = (asdToken) => ({ type: SET_TOKEN, asdToken });
export const setError = (errMessage) => ({type: SET_ERROR, errMessage});
export const logout = () => ({type:LOGOUT_ASD});

export const loginTC = (username, password) => async (dispatch) => {
  try {
    let response = await loginAsdApi.getAsdToken(username, password);
    if (response.status === 200) {
      console.log(response.data)
      dispatch(setAsdToken(response.data.asdtoken));
    } 
  }  
  catch(err) {
    dispatch(setError(err));
  }
  
}

export const logoutTC = () => async(dispatch) => {
  try {
    let response = await loginAsdApi.logOutAsd();
    if (response.status === 200) {
      console.log(response)
      dispatch(logout());
      // dispatch(setAsdToken(response.data.asdtoken));
    } 
  }  
  catch(err) {
    dispatch(setError(err));
  }
}

