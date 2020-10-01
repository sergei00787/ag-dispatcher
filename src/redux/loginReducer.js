import { loginAgApi } from '../api/api'

const initialState = { login: 'test', password: 'ttttt123', agToken: null, error: null  }
//const initialState = { login: 'demo', password: 'demo', agToken: null, error: null }

const LOGIN_SUCCESS = 'agDispatcher/Login/LOGIN_SUCCESS';
const LOGIN_CHANGE = 'agDispatcher/Login/LOGIN_CHANGE';
const PASSWORD_CHANGE = 'agDispatcher/Login/PASSWORD_CHANGE';
const SET_AG_TOKEN = 'agDispatcher/Login/SET_AG_TOKEN';
const SET_ERROR = 'agDispatcher/Login/SET_ERROR';

export default (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_SUCCESS:
      return { ...state };

    case LOGIN_CHANGE:
      return {
        ...state,
        login: action.login
      };

    case PASSWORD_CHANGE:
      return {
        ...state,
        password: action.password
      };

    case SET_AG_TOKEN:
      return {
        ...state,
        agToken: action.agToken
      };

      case SET_ERROR:
        return {
          ...state,
          error: action.errMessage
        }

    default:
      return state
  }
};

export const loginChange = (login) => ({ type: LOGIN_CHANGE, login });
export const passwordChange = (password) => ({ type: PASSWORD_CHANGE, password });
export const setAgToken = (agToken) => ({ type: SET_AG_TOKEN, agToken });
export const setError = (errMessage) => ({type: SET_ERROR, errMessage})

export const loginTC = (login, password) => async (dispatch) => {
  try {
    let response = await loginAgApi.getAgToken(login, password);
    if (response.status === 200) {
      dispatch(setAgToken(response.data));
    } 
  }  
  catch(err) {
    dispatch(setError(err));
  }
  
}

