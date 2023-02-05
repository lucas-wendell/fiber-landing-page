import './style.css';
import { NavButtonContainer } from '../NavButtonContainer';

export const Nav = () => {
	return (
		<nav className="nav">
			<h6 className="logo">Fiber</h6>
			<ul className="links">
				<li>Community</li>
				<li>Pricing</li>
				<li>Features</li>
			</ul>
			<NavButtonContainer />
		</nav>
	);
};
