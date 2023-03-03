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
		case actions.LOG_IN: {
			const newUser = [...state.users, action.payload];
			const [userToBeLogged] = newUser.filter(
				user =>
					user.email === action.payload.email &&
					user.password === action.payload.password,
			);

			return {
				users: state.users,
				userLog: userToBeLogged,
			};
		}
		default: {
			console.log('default');
			return state;
		}
	}
};
