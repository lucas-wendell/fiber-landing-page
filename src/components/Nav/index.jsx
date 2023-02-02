import React from 'react';
import { NavButtonContainer } from '../NavButtonContainer';

export const Nav = () => {
	return (
		<nav className="nav">
			<h6 className="log">Fiber</h6>
			<ul className="links">
				<li>Community</li>
				<li>Pricing</li>
				<li>Features</li>
			</ul>
			<NavButtonContainer />
		</nav>
	);
};
