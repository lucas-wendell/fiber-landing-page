import React from 'react';
import { NavButton } from '../NavButton';
import './style.css';

export const NavButtonContainer = () => {
	return (
		<div className="navButtonContainer">
			<NavButton state={'secondary'}>Sign In</NavButton>
			<NavButton state={'primary'}>Sign Up</NavButton>
		</div>
	);
};
