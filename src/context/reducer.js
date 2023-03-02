import actions from './actions';

export const reducer = (state, action) => {
	switch (action.type) {
		case actions.CREATE_USER: {
			const newUser = [...state.users, action.payload];
			const [userToBeLogged] = newUser.filter(
				user => user.email === action.payload.email,
			);

			return {
				users: [...newUser],
				userLog: userToBeLogged,
			};
		}
		case action.LOG_IN:
			break;
		default: {
			console.log('default');
			return state;
		}
	}
};
