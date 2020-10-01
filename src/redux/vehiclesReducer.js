import { schemaAgApi } from '../api/api';

const SET_ENUM_DEVICES = "ag-dispatcher/Vehicles/SET_ENUM_DEVICES";
const SET_ID_SELECTED_DEVICES = "ag-dispatcher/Vehicles/SET_ID_SELECTED_DEVICES";

//INIT STATE
let initState = {
  enumDevices: {},
  idSelectedDevice: 0,
  propertiesSelectedDevice:{}
}

// REDUCER'S
export default (state = initState, action) => {

  switch (action.type) {
    case SET_ENUM_DEVICES:
      return {
        ...state,
        enumDevices: action.payload.devices
      }
    case SET_ID_SELECTED_DEVICES:
      return {
        ...state,
        idSelectedDevice: action.payload.idDevice
      }
    default: return state;
  }
};

// ACTION'S CREATOR
const setEnumDevices = (devices) => ({ type: SET_ENUM_DEVICES, payload: { devices } });
const setIdSelectedDevice = (idDevice) => ({ type: SET_ID_SELECTED_DEVICES, payload: { idDevice } });

// THUNK'S
export const getEnumDevicesTC = (schemaId) => async (dispatch) => {
  try {
    let response = await schemaAgApi.getAgDevices(schemaId);

    if (response.status === 200) {

      dispatch(setEnumDevices(response.data));
    }
  }
  catch (error) {
    console.log('Error in thunk getEnumDeviceTC! - ' + error);
  }
}
export const selectDevice = (idDevice) => (dispatch) => {
  try {
    dispatch(setIdSelectedDevice(idDevice));
  }
  catch (error) {
    console.log('Error in thunk selectDevice! - ' + error);
  }
}
