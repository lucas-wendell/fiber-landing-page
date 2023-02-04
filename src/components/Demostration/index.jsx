import './style.css';
import exampleImage from '../../assets/page-image.png';

export const Desmostration = () => {
	return (
		<div className="demostration">
			<div className="demostrationTextDiv">
				<h3>Diversify your portfolio.</h3>
				<p>
					Create an even more impressive portfolio by creating case studies for
					your projects. Simply follow our step-by-step guide.
				</p>
				<button>Teste</button>
			</div>
			<img src={exampleImage} alt="example image" />
		</div>
	);
};
