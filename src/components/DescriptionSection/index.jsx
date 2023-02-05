import './style.css';
import { Description } from '../Description';
import { Nav } from '../Nav';

export const DescriptionSection = () => {
	return (
		<div className="descriptionSection">
			<Nav />
			<Description />
		</div>
	);
};
