import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEnumShemasTC, selectSchema } from '../../redux/schemaReducer';
import { getEnumDevicesTC, selectDevice } from '../../redux/vehiclesReducer';

// Import Components
import Schema from './Schema.jsx';
import VehiclesTable from './VehiclesTable.jsx'
import VehicleProperties from './VehicleProperties';

import { GetSelectedDevice } from './../../redux/vehiclesSelector'


// Vehicles component

class Vehicles extends Component {  
  componentDidMount() {
    this.props.getEnumShemasTC();
  }

  onSelectSchema(e) {
    selectSchema(e.currentTarget.value);
    this.props.getEnumDevicesTC(e.currentTarget.value);
  }

  render() {
    return (

      <div className="Vehicles d-flex flex-column">
        <Schema
          onSelectSchema={this.props.onSelectSchema}
          idSchemaSelected={this.props.idSchemaSelected}
          enumSchema={this.props.enumSchema} />

        <div className="vehiclesInfoContainer d-flex">
          <VehiclesTable devices={this.props.devices} selectDevice={this.props.selectDevice} idSelectedDevice={this.props.idSelectedDevice} />
          <VehicleProperties devices={this.props.devices} idSelectedDevice={this.props.idSelectedDevice} selectedDevice={this.props.selectedDevice} />
        </div>
      </div>
    );
  }
}


// Vehicles container component
const mapStateToProps = (state) => {
  return {
    enumSchema: state.SchemaState.enumSchema,
    idSchemaSelected: state.SchemaState.idSchemaSelected,
    devices: state.VehiclesState.enumDevices,
    idSelectedDevice: state.VehiclesState.idSelectedDevice,
    selectedDevice: GetSelectedDevice(state),
  }
}

const mapDispatchToProps = { getEnumShemasTC, getEnumDevicesTC, selectSchema, selectDevice }

const VehiclesContainer = connect(mapStateToProps, mapDispatchToProps)(Vehicles);

export default VehiclesContainer;
