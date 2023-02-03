import React from 'react';
import './style.css';

export const Button = ({ state, width, children }) => {
	const stylesOptions = {
		primary: { color: '#fff', backgroundColor: '#4e13d1' },
		secondary: { color: '#0c0b07', backgroundColor: 'transparent' },
	};
	const styles = stylesOptions[state];

	return (
		<button style={{ width, ...styles }} className="button">
			{children}
		</button>
	);
};
