import './style.css';
import { DescriptionText } from '../DescriptionText';
import illustration from '../../assets/hero-illustration.png';

export const Description = () => {
	return (
		<div className="description">
			<DescriptionText />
			<img src={illustration} alt="hero illustration" />
		</div>
	);
};
