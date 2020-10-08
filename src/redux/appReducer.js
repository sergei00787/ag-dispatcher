import { loginAgApi, updAgTokenInstanceAxios } from '../api/apiAG.js';
import config from './../ag-dispatcher';

const initialState = {
  // login: 'testasd',
  // password: 'testdsa',
  login: config.agLogin,
  password: config.agPassword,
  agToken: null,
  error: {},
  initialized: false,
  isInitInProgress: undefined
}

// Constants
const LOGIN_SUCCESS = 'agDispatcher/appReducer/LOGIN_SUCCESS';
const SET_AG_TOKEN = 'agDispatcher/appReducer/SET_AG_TOKEN';
const SET_ERROR = 'agDispatcher/appReducer/SET_ERROR';
const SUCCESS_INITIALIZED = 'agDispatcher/appReducer/SUCESS_INITIALIZED';
const SET_INIT_IN_PROGRESS = 'agDispatcher/appReducer/SET_INIT_IN_PROGRESS';

// Reducer
const appReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_SUCCESS:
      return { ...state };

    case SET_AG_TOKEN:
      return {
        ...state,
        agToken: action.agToken,
        initialized: true
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.errMessage
      }

    case SUCCESS_INITIALIZED: {
      return {
        ...state,
        initialized: true
      }
    }

    case SET_INIT_IN_PROGRESS: {
      return {
        ...state,
        isInitInProgress: action.inProgress
      }
    }

    default:
      return state
  }
};

// action creator
export const setAgToken = (agToken) => ({ type: SET_AG_TOKEN, agToken });
export const setError = (errMessage) => ({ type: SET_ERROR, errMessage });
export const setInitInProgress = (inProgress) => ({ type: SET_INIT_IN_PROGRESS, inProgress });
export let initialize = () => ({ type: SUCCESS_INITIALIZED });

// set thunk
export const loginAG = (login, password) => async (dispatch) => {
  try {
    let response = await loginAgApi.getAgToken(login, password);
    if (response.status === 200) {
      dispatch(setAgToken(response.data));
    } else {
      dispatch(setAgToken(null));
      throw new Error();
    }
  }
  catch (err) {
    dispatch(setError(err));
  }
  finally {
    dispatch(setInitInProgress(false));
  }

}

export const fetchAgToken = (dispatch, getState) => {
  if (!getState().AppState.initialized) dispatch(setInitInProgress(true));

  const { login, password } = getState().AppState;
  let promise = dispatch(loginAG(login, password));

  promise.then(response => {
    if (response) {
      updAgTokenInstanceAxios(response.data)
      dispatch(initialize());
    }
  })
}

export const initializeApp = () => {
  return fetchAgToken;
}

export default appReducer;