import { useState } from 'react';
import './style.css';

export const Modal = ({ setErro, children }) => {
	const [visibility, setVisibility] = useState(true);

	return (
		<div isvisible={visibility.toString()} className="cotainerModal">
			<div className="modal">
				<button
					onClick={() => {
						setErro({
							erro: false,
							message: '',
						});
						setVisibility(currentVisibility => !currentVisibility);
					}}
				>
					X
				</button>
				<p>{children}</p>
			</div>
		</div>
	);
};

export default Modal;
