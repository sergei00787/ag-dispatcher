import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Table } from 'react-bootstrap';

const Calibration = (props) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      // className={classes.heading}
      >
        <div>Развернуть</div>
      </AccordionSummary>
      <AccordionDetails>
        <Table variant="dark" className="">
          <thead>
            <tr>
              <th>Выход</th>
              <th>Вход</th>
            </tr>
          </thead>
          <tbody className="VehiclePropertiesTableBody">
            {props.list.Items.map(item => {
              return (
                <tr>
                  <td>{item.Output}</td>
                  <td>{item.Input}</td>
                </tr>
              )
            }
            )}
          </tbody>

        </Table>
      </AccordionDetails>
    </Accordion>
  )
}

export default Calibration;