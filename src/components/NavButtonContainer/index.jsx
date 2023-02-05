import './style.css';
import { Button } from '../Button';

export const NavButtonContainer = () => {
	return (
		<div className="navButtonContainer">
			<Button state={'secondary'}>Sign In</Button>
			<Button state={'primary'}>Sign Up</Button>
		</div>
	);
};
