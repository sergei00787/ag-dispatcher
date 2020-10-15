import { schemaAgApi } from '../api/apiAG';
import { getEnumDevicesTC } from './vehiclesReducer.js';

const SET_ENUM_SCHEMA = "ag-dispatcher/Schema/SET_ENUM_SCHEMA";
const SET_SELECTED_SCHEMA = "ag-dispatcher/Schema/SET_SELECTED_SCHEMA";


let initState = {
  enumSchema: [{ 'ID': '1', 'Name': 'TestSchema' }],
  idSchemaSelected: undefined,
  enumDevices: {}
}


export default (state = initState, action) => {

  switch (action.type) {
    case SET_ENUM_SCHEMA:
      return {
        ...state,
        enumSchema: action.payload.schemas
      }

    case SET_SELECTED_SCHEMA:
      return {
        ...state,
        idSchemaSelected: action.payload.schemaId
      }
      
    default: return state;
  }
};

const setEnumSchema = (schemas) => ({ type: SET_ENUM_SCHEMA, payload: { schemas } });
const setSelectedSchema = (schemaId) => ({ type: SET_SELECTED_SCHEMA, payload: { schemaId } });


export const getEnumShemasTC = () => async (dispatch) => {
  try {
    let response = await schemaAgApi.getAgSchemas();
    if (response.status === 200) {
      dispatch(setEnumSchema(response.data));
      dispatch(selectSchema(response.data[0].ID));
      dispatch(getEnumDevicesTC(response.data[0].ID));
    }
  }
  catch (error) {
    return error;
  }
}

export const selectSchema = (schemaId) => (dispatch) => {
  try {
    dispatch(setSelectedSchema(schemaId));
  }

  catch (error) {
    return error;
  }
}


