import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GuestName from './GuestName';

class Guest extends Component {

  render() {

  	return (
	  	<li className="responded">
	  		<GuestName 
	  			isEditing={this.props.isEditing}
	  			handleNameEdits={ e => this.props.setName(e.target.value)}
	  		>
	  			{this.props.name}
	  		</GuestName>

		    <label>
		      <input 
		      	onChange={this.props.handleConfirmation} 
		      	type="checkbox" 
		      	checked={this.props.isConfirmed}/> Confirmed
		    </label>

		    <button onClick={this.props.handleEditing}>
		    {this.props.isEditing ? "save" : "edit"}
		    </button>

		    <button onClick={this.props.handleRemove}>remove</button>
  		</li>
		)
	}
}

Guest.propTypes = {
	name: PropTypes.string.isRequired,
	isCofirmed: PropTypes.bool.isRequired,
	isEditing: PropTypes.bool.isRequired,
	handleConfirmation: PropTypes.func.isRequired,
	handleEditing: PropTypes.func.isRequired,
	setName: PropTypes.func.isRequired,
	handleRemove: PropTypes.func.isRequired,
};

export default Guest;