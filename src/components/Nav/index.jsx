import './style.css';
import { NavButtonContainer } from '../NavButtonContainer';
import { useContext } from 'react';
import { GlobalContext } from '../../context';

export const Nav = () => {
	const { userLog } = useContext(GlobalContext);

	return (
		<nav className="nav">
			<h6 className="logo">Fiber</h6>
			<ul className="links">
				<li>Community</li>
				<li>Pricing</li>
				<li>Features</li>
			</ul>
			{userLog ? <p>Ola, {userLog.name}!</p> : <NavButtonContainer />}
		</nav>
	);
};
