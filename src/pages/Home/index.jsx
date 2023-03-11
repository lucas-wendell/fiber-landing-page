import './style.css';

import { Footer } from '../../components/Footer';
import { DescriptionSection } from '../../components/DescriptionSection';
import { InformationSection } from '../../components/InformationSection';

export const Home = () => {
	return (
		<>
			<DescriptionSection />
			<InformationSection />
			<Footer />
		</>
	);
};
