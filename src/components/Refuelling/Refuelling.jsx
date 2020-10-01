
import React from 'react';
import ShiftTable from './../ShiftTable/ShiftTable';

const Refuelling = (props) => {
  return (
    <div className="Refuelling d-flex">
      <ShiftTable shifts={props.shifts} />
      <div className="refuelling-tbl">TABLE</div>
    </div>
    
  )
}

export default Refuelling
