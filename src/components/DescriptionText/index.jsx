import React from 'react';
import star from '../../assets/star.svg';
import { Benefits } from '../Benefits';
import { Button } from '../Button';
import './style.css';

export const DescriptionText = () => {
	return (
		<div className="descriptionText">
			<div className="rateDiv">
				<div className="stars">
					<img src={star} alt="star icon" />
					<img src={star} alt="star icon" />
					<img src={star} alt="star icon" />
					<img src={star} alt="star icon" />
					<img src={star} alt="star icon" />
				</div>
				<p>Rated 4.8/5 (243 reviews)</p>
			</div>
			<div className="textDiv">
				<h1>Create your portifolio in minutes.</h1>
				<p className="resume">
					With Fiber, you can setup your own personal portfolio in minutes with
					dezens of premade, beautiful templates.
				</p>
				<div className="buttonDiv">
					<Button state="primary" width="150px">
						Start Free Trial
					</Button>
					<p>View Examples</p>
				</div>
				<div className="benefitsDiv">
					<Benefits>No Credit Card Required</Benefits>
					<Benefits>10 Free Templates</Benefits>
				</div>
			</div>
		</div>
	);
};
