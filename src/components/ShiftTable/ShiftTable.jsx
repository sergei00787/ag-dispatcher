import React from 'react';

const ShiftTable = (props) => {

  const { shifts } = props;
  const listShift = shifts.map((shift) => {
    return (
      <tr key={shift.id} className='ShiftTbl-Item'>
        <td>{shift.date}</td>
        <td>{shift.shift}</td>
      </tr>
    )
  });


  return (
    <table className="table table-dark w-25">
      <thead>
        <tr>
          <th>Дата</th>
          <th>Смена</th>
        </tr>
      </thead>
      <tbody>
        {listShift}
      </tbody>
    </table>
  )
}

export default ShiftTable;