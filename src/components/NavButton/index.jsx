import React from 'react';

export const NavButton = ({ state, children }) => {
	return (
		<button style={{ background: state === 'primary' ? 'red' : 'blue' }}>
			{children}
		</button>
	);
};
