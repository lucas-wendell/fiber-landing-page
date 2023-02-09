import './style.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

export const NavButtonContainer = () => {
	return (
		<div className="navButtonContainer">
			<Link to="/signIn">
				<Button state={'secondary'}>Sign In</Button>
			</Link>
			<Link to="/signIn">
				<Button state={'primary'}>Sign Up</Button>
			</Link>
		</div>
	);
};
