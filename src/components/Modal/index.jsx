import { useState } from 'react';
import './style.css';

export const Modal = ({ isVisible, children }) => {
	const [visibility, setVisibility] = useState(isVisible);

	return (
		<div isvisible={visibility.toString()} className="cotainerModal">
			<div className="modal">
				<button
					onClick={() => setVisibility(currentVisibility => !currentVisibility)}
				>
					X
				</button>
				<p>{children}</p>
			</div>
		</div>
	);
};

export default Modal;
