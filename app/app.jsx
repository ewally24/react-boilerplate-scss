import React from 'react'
import reactDOM from 'react-dom'
var {Router, Route, IndexRoute, hashHistory} = require('react-router');
var {Provider} = require('react-redux');

import Main from 'Main';
import Flexbox from 'Flexbox';

var store = require('configureStore').configure();
import * as actions from 'actions';

//load foundation
$(document).foundation();
//require('style!css!foundation-sites/dist/foundation.min.css');

//load custom styles
require('style!css!sass!ApplicationStyles');

var unsubscribe = store.subscribe(() => {
	var state = store.getState;

	console.log('CurrentState', state);
})


reactDOM.render(
	<Provider store={store}>
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Flexbox}/>
		</Route>
	</Router>
	</Provider>,
	document.getElementById('app')
)