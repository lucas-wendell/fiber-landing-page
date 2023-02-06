import './style.css';

export const UlComponent = ({ title, links }) => {
	return (
		<div className="ulContainer">
			<h5>{title}</h5>
			<ul className="ul">
				{links.map(({ linkTitle, url }, index) => (
					<li key={index}>
						<a href={url}>{linkTitle}</a>
					</li>
				))}
			</ul>
		</div>
	);
};
