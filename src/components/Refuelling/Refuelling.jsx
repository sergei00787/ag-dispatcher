
import React, { useState } from 'react';
import ShiftTable from './../ShiftTable/ShiftTable';
import { DatePicker, TimePicker, DateTimePicker, MuiPickersUtilsProvider, } from '@material-ui/pickers';

const Refuelling = (props) => {

  const [selectedDateStart,  handleDateChangeStart] = useState(new Date());
  const [selectedDateFinish, handleDateChangeFinish] = useState(new Date());

  return (
    <div className="Refuelling d-flex">
      {/* <ShiftTable shifts={props.shifts} /> */}
      <div className="RefStartDate">
        <DateTimePicker 
          label="Начало"
          ampm={false}
          inputVariant="outlined" 
          value={selectedDateStart} 
          onChange={handleDateChangeStart} />
      </div>

      <div className="RefFinishDate">
        <DateTimePicker
          ampm={false}
          label="Окончание" 
          inputVariant="outlined"
          value={selectedDateFinish} 
          onChange={handleDateChangeFinish} />
      </div>

      <div className="refuelling-tbl">TABLE</div>
    </div>

  )
}

export default Refuelling
