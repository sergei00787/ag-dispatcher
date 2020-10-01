import React from 'react';

const Schema = (props) => {
  return (
    <div className="schemaContainer d-flex">
        <select
          className="selectSchema m-3"
          onChange={props.onSelectSchema}
          value={props.idSchemaSelected}>
          {props.enumSchema.map(s => {
            return (
              <option key={s.ID} value={s.ID}>{s.Name}</option>
            )
          })}
        </select>
      </div>
  )
}

export default Schema;