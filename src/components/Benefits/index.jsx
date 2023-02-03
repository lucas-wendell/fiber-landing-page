import checkMark from '../../assets/Checkmark.svg';
import './style.css';

export const Benefits = ({ children }) => {
	return (
		<div className="benefits">
			<img src={checkMark} alt="checkmark icon" />
			<p>{children}</p>
		</div>
	);
};
