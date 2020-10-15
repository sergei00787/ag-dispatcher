
import { schemaAgApi } from '../api/apiAG';

export const GET_REFUELLING = 'Ag-dispatcher/Refuelling/GET_REFUELLING'
export const GET_DEVICES = 'Ag-dispatcher/Refuelling/GET_DEVICES';
export const GET_TRIPS = 'Ag-dispatcher/Refuelling/GET_TRIPS';

const initialState = {
  schema: null,
  devicesList: [],
  trips: null,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case GET_REFUELLING:
      return { ...state }

    case GET_DEVICES:
      return { ...state, devicesList: action.payload.devices }

    case GET_TRIPS:
      return { ...state, trips: action.payload.trips }

    default:
      return state
  }
}

const setEnumDevices = (devices) => ({ type: GET_DEVICES, payload: { devices } });

const setTrips = (trips) => ({ type: GET_TRIPS, payload: { trips } })

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

export const getTripsListTC = (schemaId, SD, ED, tripParams) => async (dispatch) => {
  try {
    console.log("getTripsListTC");
    let listDevices;
    let resDevices = await schemaAgApi.getAgDevices(schemaId);
    if (resDevices.status === 200) {
      listDevices = resDevices.data.Items.map(item => { return item.ID });
      dispatch(setEnumDevices(listDevices));
    }
    
    // let response = await schemaAgApi.getAgStage(schemaId, listDevices.join(), SD, ED, tripParams);
    let response = await schemaAgApi.getAgStage(schemaId, "aa1ac537-316e-4aa0-912a-35046e8c8d9e", SD, ED, tripParams);
    
    // let response = await schemaAgApi.getAgTrips(schemaId, listDevices.join(), SD, ED, tripParams);
    if (response.status === 200) {
      console.log(response.data);
      // let list = response.data.Items.map(item => { return item.ID });
      dispatch(setTrips(response.data));
    }

  }
  catch (error) {
    return error;
  }
}
