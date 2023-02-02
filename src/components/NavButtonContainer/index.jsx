import React from 'react';
import { NavButton } from '../NavButton';

export const NavButtonContainer = () => {
	return (
		<div className="navButtonContainer">
			<NavButton state={'primary'}>Sign In</NavButton>
			<NavButton state={'secundary'}>Sign Up</NavButton>
		</div>
	);
};
