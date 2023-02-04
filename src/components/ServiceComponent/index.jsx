import './style.css';

export const Service = ({ icon, shortDescription, description }) => {
	return (
		<div className="service">
			<img src={icon} alt="service icon" />
			<div className="serviceDescription">
				<p className="shortDescription">{shortDescription}</p>
				<p className="description">{description}</p>
			</div>
		</div>
	);
};
