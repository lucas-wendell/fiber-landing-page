import './style.css';
import { useContext, useEffect, useState } from 'react';

import { DescriptionSection } from '../../components/DescriptionSection';
import { Footer } from '../../components/Footer';

import { InformationSection } from '../../components/InformationSection';
import { GlobalContext } from '../../context';

export const Home = () => {
	const [contextState, setContextState] = useState();
	const globalContext = useContext(GlobalContext);

	const handleSetUser = () => {
		globalContext.forEach(user => {
			localStorage.setItem(user.id, JSON.stringify(user));
		});
	};

	useEffect(() => {
		handleSetUser();
	}, []);

	useEffect(() => {
		handleSetUser();
	}, [contextState]);

	return (
		<>
			<GlobalContext.Provider value={{ contextState, setContextState }}>
				<DescriptionSection />;
				<InformationSection />
				<Footer />
			</GlobalContext.Provider>
		</>
	);
};
