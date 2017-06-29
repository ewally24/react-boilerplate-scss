import React from 'react';
import * as Redux from 'react-redux';

export var Main = React.createClass({

	render: function() {
		return(
			<div>
				<div className='row'>
					<div className='column medium-6 large-4 small-centered'>
						<h3> Main.jsx </h3>
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
})

export default Redux.connect()(Main);