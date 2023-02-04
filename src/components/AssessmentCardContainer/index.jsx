import { useState } from 'react';
import './style.css';
import janiceAvatar from '../../assets/janice-avatar.svg';
import mathewAvatar from '../../assets/mathew-avatar.svg';
import sarahAvatar from '../../assets/sarah-avatar.svg';
import { AssessmentCard } from '../AssessmentCard';

export const AssessmentCardContainer = () => {
	const [assessment] = useState([
		{
			id: 1,
			avatar: sarahAvatar,
			name: 'Sarah Andrews',
			revenue: '$100k in revenue',
			assessment:
				'Setting up my portfolio with Fiber took no more than 10 minutes. Since then, my portfolio has attracted a lot of clients and made me more than $100k.',
		},
		{
			id: 2,
			avatar: mathewAvatar,
			name: 'Mathew Higgins',
			revenue: '$20k in revenue',
			assessment:
				"I have been getting A LOT of leads ever since i used Fiber's premade templates, now i just need to work on my case studies and i'll be ready to go!",
		},
		{
			id: 3,
			avatar: janiceAvatar,
			name: 'Janice Dave',
			revenue: '$30k in revenue',
			assessment:
				'I only just started frelancing this year and i have already made more than i ever made in my full-time job. The templates are  just so amazing.',
		},
	]);

	return (
		<div className="assessmentCardContainer">
			{assessment.map(({ name, id, avatar, revenue, assessment }) => (
				<AssessmentCard
					key={id}
					avatar={avatar}
					name={name}
					revenue={revenue}
					text={assessment}
				/>
			))}
		</div>
	);
};
