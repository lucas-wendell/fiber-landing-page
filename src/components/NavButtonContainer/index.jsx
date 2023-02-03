import React from 'react';
import { Button } from '../Button';
import './style.css';

export const NavButtonContainer = () => {
	return (
		<div className="navButtonContainer">
			<Button state={'secondary'}>Sign In</Button>
			<Button state={'primary'}>Sign Up</Button>
		</div>
	);
};
