import React, { useState } from "react";
import { connect } from "react-redux";
// import ShiftTable from './../ShiftTable/ShiftTable';
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { Button } from "react-bootstrap";
import RefuellingTable from "./RefuellingTable";
import moment from "moment";
import {
  getDevicesListTC,
  getTripsListTC,
} from "../../redux/refuellingReducer";
import config from "../../ag-dispatcher";

const Refuelling = (props) => {
  const [RefStart, handleChangeRefStart] = useState(
    new moment().hour(0).minute(0)
    // new moment().subtract(5, "hours")
  );
  const [RefFinish, handleChangeRefFinish] = useState(
    // new moment());
    new moment().hour(5).minute(0)
  );

  const handleSubmit = (e) => {
    // props.getDevicesListTC('d28e3930-7faa-469d-9551-7ed561830b09');
    props.getTripsListTC(
      config.schemaId,
      RefStart.format("YYYYMMDD-HHmm"),
      RefFinish.format("YYYYMMDD-HHmm"),
      "Tank*",
      "*",
      "*"
    );
    e.preventDefault();

    //loginTC(username, password);
    //return <Redirect to="/refuelling" />
  };

  return (
    <div className="Refuelling d-flex flex-column">
      {/* <ShiftTable shifts={props.shifts} /> */}
      <form
        onSubmit={handleSubmit}
        className="FormRefuelParams d-flex flex-row justify-content-start align-items-center"
      >
        <KeyboardDateTimePicker
          label="Начало"
          ampm={false}
          format="DD.MM.YYYY HH:mm"
          inputVariant="outlined"
          value={RefStart}
          onChange={handleChangeRefStart}
          className="RefStart m-3"
        />
        <KeyboardDateTimePicker
          label="Окончание"
          ampm={false}
          format="DD.MM.YYYY HH:mm"
          inputVariant="outlined"
          value={RefFinish}
          onChange={handleChangeRefFinish}
          className="RefFinish m-3"
        />
        <Button variant="primary" type="submit">
          Показать
        </Button>
      </form>

      <div className="refuelling-tbl">
        <RefuellingTable />
      </div>
    </div>
  );
};

// Vehicles container component
const mapStateToProps = (state) => {
  return {
    devices: state.RefuellingState.devicesList,
  };
};

const mapDispatchToProps = { getDevicesListTC, getTripsListTC };

const RefuellingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Refuelling);

export default RefuellingContainer;
