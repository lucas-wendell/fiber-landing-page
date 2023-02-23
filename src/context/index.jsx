import { createContext } from 'react';

const InitialState = [
	{
		id: 123,
		name: 'teste',
		email: 'teste@gmail.com',
		password: 'teste123',
	},
];

export const GlobalContext = createContext(InitialState);
