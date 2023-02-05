import './style.css';
import checkMark from '../../assets/Checkmark.svg';

export const Benefits = ({ children }) => {
	return (
		<div className="benefits">
			<img src={checkMark} alt="checkmark icon" />
			<p>{children}</p>
		</div>
	);
};
