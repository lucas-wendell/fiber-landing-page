import actions from './actions';

export const reducer = (state, action) => {
	switch (action.type) {
		case actions.CREATE_USER: {
			return { ...state, users: [...state.users, action.payload] };
		}
		case action.LOG_IN:
			break;
		default: {
			console.log('default');
			return state;
		}
	}
};
