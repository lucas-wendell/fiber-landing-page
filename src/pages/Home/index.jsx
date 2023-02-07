import { DescriptionSection } from '../../components/DescriptionSection';
import { Footer } from '../../components/Footer';
import { InformationSection } from '../../components/InformationSection';
import './style.css';

export const Home = () => {
	return (
		<>
			<DescriptionSection />;
			<InformationSection />
			<Footer />
		</>
	);
};
