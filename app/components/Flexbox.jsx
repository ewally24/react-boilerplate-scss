import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

export var Flexbox = React.createClass({
	render: function() {
		var {message, dispatch} = this.props;

		dispatch(actions.setMessage());
		return (
			<div>
				<p>{message}</p>
			</div>
		)
	}
});

export default Redux.connect((state) => {
	return state;
})(Flexbox)