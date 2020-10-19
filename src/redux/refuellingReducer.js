
import { schemaAgApi } from '../api/apiAG';
import { getRefuelsfromStages } from '../utility/agUtility';
import { moment } from 'moment';

export const GET_REFUELLING = 'Ag-dispatcher/Refuelling/GET_REFUELLING'
export const GET_DEVICES = 'Ag-dispatcher/Refuelling/GET_DEVICES';
export const GET_STAGES = 'Ag-dispatcher/Refuelling/GET_STAGES';

const initialState = {
  schema: null,
  devicesList: [],
  stages: null,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case GET_REFUELLING:
      return { ...state }

    case GET_DEVICES:
      return { ...state, devicesList: action.payload.devices }

    case GET_STAGES:
      return { ...state, stages: action.payload.trips }

    default:
      return state
  }
}

const setEnumDevices = (devices) => ({ type: GET_DEVICES, payload: { devices } });

const setStages = (trips) => ({ type: GET_STAGES, payload: { trips } })

// THUNK'S
export const getDevicesListTC = (schemaId) => async (dispatch) => {
  try {
    let response = await schemaAgApi.getAgDevices(schemaId);
    if (response.status === 200) {
      let list = response.data.Items.map(item => { return item.ID });
      dispatch(setEnumDevices(list));
    }
  }
  catch (error) {
    return error;
  }
}

export const getTripsListTC = (schemaId, SD, ED, stageName, tripParams, tripTotalParams) => async (dispatch) => {
  try {
    console.log("getTripsListTC");
    let listDevices;
    let resDevices = await schemaAgApi.getAgDevices(schemaId);
    if (resDevices.status === 200) {
      listDevices = resDevices.data.Items.map(item => { return item.ID });
      //dispatch(setEnumDevices(listDevices));
    }

    let response = await schemaAgApi.getAgStage(schemaId, listDevices.join(), SD, ED, stageName, tripParams, tripTotalParams);
    if (response.status === 200) {
      console.log(response.data);
      const refuels = getRefuelsfromStages(response.data);      
      
      dispatch(setStages(refuels));
    }

  }
  catch (error) {
    console.error(error);
    return error;
  }
}
