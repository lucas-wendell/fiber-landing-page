import './style.css';

import { useState } from 'react';
import clock from '../../assets/time.svg';

import code from '../../assets/code.svg';
import sizesIcon from '../../assets/allSizes.svg';
import { Service } from '../ServiceComponent';

export const ServiceContainer = () => {
	const [services] = useState([
		{
			id: 1,
			icon: clock,
			shortDescription: 'Build in minutes',
			description:
				'With a selection of premade templates, you can build out a portfolio in less than 10 minutes.',
		},
		{
			id: 2,
			icon: code,
			shortDescription: 'Add custom CSS',
			description:
				'Customize your personal portfolio even more with the ability to add your own custom CSS styles.',
		},
		{
			id: 3,
			icon: sizesIcon,
			shortDescription: 'Responsive',
			description:
				'All fiber template are fully responsive to ensure the experience is seemless across all devices.',
		},
	]);

	return (
		<div className="serviceContainer">
			<div className="textDiv">
				<p>Why Fiber?</p>
				<h2>A good portfolio means good employability.</h2>
			</div>

			<div className="services">
				{services.map(({ description, id, shortDescription, icon }) => (
					<Service
						key={id}
						icon={icon}
						description={description}
						shortDescription={shortDescription}
					/>
				))}
			</div>
		</div>
	);
};
