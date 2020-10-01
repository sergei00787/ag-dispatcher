import React from 'react';
import { Table } from 'react-bootstrap';
import Calibration from './Calibration.jsx';


const VehicleProperties = (props) => {
  if (props.selectedDevice) {
    return (
      <div className="VehicleProperties ml-3">
        <Table bordered variant="dark" className="VehiclePropertiesTable bordered">
          <thead className="VehiclePropertiesTableHead">
            <tr>
              <th>Имя свойства</th>
              <th>Значение</th>
            </tr>
          </thead>
          <tbody className="VehiclePropertiesTableBody">
            {props.selectedDevice.Properties.map((property, index) => {
              return (
                <tr key={index} className="RowProperty">
                  <td>{property.Name}</td>
                  { (typeof (property.Value) === "object")
                    ? <td><Calibration list={property.Value} /></td>
                    : <td>{property.Value.toString()}</td>}

                </tr>
              )
            })
            }
          </tbody>
        </Table>
      </div>
    );
  } else {
    return <div></div>
  }

};

export default VehicleProperties;
