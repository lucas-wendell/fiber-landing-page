import actions from './actions';
import { reducer } from './reducer';
import { createContext, useReducer } from 'react';

const initialState = {
	users: [
		{
			name: 'teste',
			email: 'teste@gmail.com',
			password: 'teste123',
		},
	],
	userL: null,
};

export const GlobalContext = createContext();

export const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const value = {
		users: state.users,
		createUser: userInfo => {
			dispatch({ type: actions.CREATE_USER, payload: userInfo });
		},
	};

	return (
		<GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
	);
};
