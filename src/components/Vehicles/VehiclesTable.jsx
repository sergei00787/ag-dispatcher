import React from 'react';
import { getPropValueFromProperties } from './../../utility/agUtility.js';
import { Table } from 'react-bootstrap';



const VehiclesTable = (props) => {

  const onRowClick = (e) => {
    props.selectDevice(e.currentTarget.cells[0].innerHTML);
  }

  const listVihicles = (props) => {
    return props.devices.Items &&
      props.devices.Items.map((device) => {
        const classActive = (device.ID === props.idSelectedDevice) ? "active" : "";
        return (
          <tr
            key={device.ID}
            className={`RowVehicle ${classActive}`}
            onClick={onRowClick}>
            <td hidden>{device.ID}</td>
            <td>{device.Name}</td>
            <td>{getPropValueFromProperties("VehicleRegNumber", device.Properties)}</td>
          </tr>
        )
      })
  }

  return (
    <div className="vehicleTableWrap">
      <Table bordered variant="dark" className="vehicleTable  bordered mr-2">
        <thead className="vehicleTableHead">
          <tr>
            <th>Модель</th>
            <th>Гос.номер</th>
          </tr>
        </thead>
        <tbody className="vehicleTableBody">
          {listVihicles(props)}
        </tbody>
      </Table>
    </div>
  )
};

export default VehiclesTable;