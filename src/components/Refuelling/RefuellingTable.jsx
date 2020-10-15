import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {

  };
}

class RefuellingTable extends Component {
  render() {
    return (
      <div>
        RT
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(RefuellingTable);