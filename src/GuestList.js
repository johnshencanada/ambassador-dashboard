import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';
import PendingGuest from './PendingGuest';

class GuestList extends Component {

  render() {
  	return (
	  	<ul>
	  		<PendingGuest name={this.props.pendingGuest} />
			  {
			  	this.props.guests
			  		.filter(guest =>  !this.props.isFiltered || guest.isConfirmed)
			  		.map((guest, index) => 
				  		<Guest 
				  			key={index} 
				  			name={guest.name} 
				  			isConfirmed={guest.isConfirmed} 
				  			isEditing={guest.isEditing} 
				  			handleConfirmation={() => this.props.toggleConfirmationAt(index)}
				  			handleEditing={() => this.props.toggleEditingAt(index)}
				  			setName={text => this.props.setNameAt(text, index)}
				  			handleRemove={() => this.props.removeGuestAt(index)} 
				  		/>
			 	)}
			</ul>
		)
	}
}

GuestList.propTypes = {
	guests: PropTypes.array.isRequired,
	toggleConfirmationAt: PropTypes.func.isRequired,
	toggleEditingAt: PropTypes.func.isRequired,
	setNameAt: PropTypes.func.isRequired,
	isFiltered: PropTypes.bool.isRequired,
	removeGuestAt: PropTypes.func.isRequired,
	pendingGuest: PropTypes.string.isRequired
};

export default GuestList;