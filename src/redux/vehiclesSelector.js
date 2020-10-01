export const GetIdSelectedDevice = (state) => { return state.VehiclesState.idSelectedDevice }

export const GetSelectedDevice = (state) => {
  return !(Object.keys(state.VehiclesState.enumDevices).length === 0
    && state.VehiclesState.enumDevices.constructor === Object) 
    ? state.VehiclesState.enumDevices.Items.find(device => device.ID === state.VehiclesState.idSelectedDevice) 
    : undefined;
}