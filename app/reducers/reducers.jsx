export var messageReducer = (state = 'Default Message', action) => {
	switch(action.type) {
		case 'SET_MESSAGE':
			return 'Redux is working with React Boilerplate, Normalize.css, Foundation, ENV Variables and minified!';
		default:
			return state;
	}
}