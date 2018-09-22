import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GuestName extends Component {

  render() {

  	if (this.props.isEditing) {
			return (
				<div>
					<input 
						type="text" 
						value={this.props.children}
						onChange={this.props.handleNameEdits} /> 
				</div>
			);
  	} else 
  	{
  		return (
				<div>
					<span> 
						{this.props.children }
					</span>
				</div>
			)
  	}
	}
}

GuestName.propTypes = {
	isEditing: PropTypes.bool.isRequired,
	handleNameEdits: PropTypes.func.isRequired,
};

export default GuestName;