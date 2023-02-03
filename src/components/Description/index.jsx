import React from 'react';
import { DescriptionText } from '../DescriptionText';

import illustration from '../../assets/hero-illustration.png';
import './style.css';

export const Description = () => {
	return (
		<div className="description">
			<DescriptionText />
			<img src={illustration} alt="hero illustration" />
		</div>
	);
};
