import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {

  render() {

    return (
      <table className="counter">
        <tbody>
          <tr>
            <td>Joined:</td>
            <td>{this.props.numberAttending}</td>
          </tr>
          <tr>
            <td>Unconfirmed:</td>
            <td>{this.props.numberUncofirmed}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>{this.props.totalInvited}</td>
          </tr>
        </tbody>
      </table>
    );
    
    return null;
  }
}

Counter.propTypes = {
  numberAttending: PropTypes.number,
  numberUncofirmed: PropTypes.number,
  totalInvited: PropTypes.number,
};


export default Counter;


