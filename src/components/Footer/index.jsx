import { useState } from 'react';
import { UlComponent } from '../UlComponent';
import './style.css';

export const Footer = () => {
	const [links] = useState([
		{
			id: 1,
			title: 'Sitemap',
			links: [
				{
					linkTitle: 'Homepage',
					url: '#',
				},
				{
					linkTitle: 'Pricing',
					url: '#',
				},
				{
					linkTitle: 'Testimonials',
					url: '#',
				},
				{
					linkTitle: 'Features',
					url: '#',
				},
			],
		},
		{
			id: 2,
			title: 'Resources',
			links: [
				{
					linkTitle: 'Suppor',
					url: '#',
				},
				{
					linkTitle: 'Contact',
					url: '#',
				},
				{
					linkTitle: 'FAQ',
					url: '#',
				},
			],
		},
		{
			id: 3,
			title: 'Company',
			links: [
				{
					linkTitle: 'About',
					url: '#',
				},
				{
					linkTitle: 'Customers',
					url: '#',
				},
				{
					linkTitle: 'Blog',
					url: '#',
				},
			],
		},
		{
			id: 4,
			title: 'Portfolios',
			links: [
				{
					linkTitle: 'Sarah Andrews',
					url: '#',
				},
				{
					linkTitle: 'Mathew Higgins',
					url: '#',
				},
				{
					linkTitle: 'Janice Dave',
					url: '#',
				},
			],
		},
	]);

	return (
		<footer className="footer">
			<div className="content">
				<div className="fiberDescription">
					<div className="textDiv">
						<h5>Fiber</h5>
						<p>
							With Fiber, you can setup your own personal portfolio in minutes
							with dozens of premade, beautiful templates.
						</p>
					</div>
					<p className="createdBy">Created by Lucas Wendell</p>
				</div>
				<div className="linksContainer">
					{links.map(({ id, title, links }) => (
						<UlComponent key={id} title={title} links={links} />
					))}
				</div>
			</div>
		</footer>
	);
};
