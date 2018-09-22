import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PendingGuest extends Component {

  render() {

  	if (this.props.name) {
	  	return (
		  	<li className="pending">
		  		<span>
		  			{this.props.name}
		  		</span>
	  		</li>
			);
		}
		
		return null;
	}

}

PendingGuest.propTypes = {
	name: PropTypes.string.isRequired
};

export default PendingGuest;