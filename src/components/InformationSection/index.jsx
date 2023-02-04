import './style.css';

import { Desmostration } from '../Demostration';
import { ServiceContainer } from '../ServiceContainer';
import { AssessmentCardContainer } from '../AssessmentCardContainer';

export const InformationSection = () => {
	return (
		<div className="informationSection">
			<ServiceContainer />
			<Desmostration />
			<AssessmentCardContainer />
		</div>
	);
};
