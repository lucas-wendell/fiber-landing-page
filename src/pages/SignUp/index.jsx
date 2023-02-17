import SignUpForm from '../../components/SignUpForm';
import exampleImage from '../../assets/sign-up-image.png';
import './style.css';

export const SignUp = () => {
	return (
		<main className="SignUpMain">
			<section className="SignUpFormSection">
				<div className="textDiv">
					<h4>Fiber</h4>
					<h2>Create your Fiber account</h2>
				</div>
				<SignUpForm />
			</section>

			<section className="carroselSection">
				<img src={exampleImage} alt="" />
				<div className="textDiv">
					<h3>Unparalleled Templates</h3>
					<p>
						Crafted by a team of professional designers, our templates are
						eunparalleled in the market.
					</p>
				</div>
			</section>
		</main>
	);
};
