import React from 'react';
import './style.css';

export const NavButton = ({ state, children }) => {
	const styles =
		state === 'primary'
			? { color: '#fff', backgroundColor: '#4e13d1' }
			: { color: '#0c0b07', backgroundColor: 'transparent' };

	return (
		<button style={{ ...styles }} className="button">
			{children}
		</button>
	);
};
