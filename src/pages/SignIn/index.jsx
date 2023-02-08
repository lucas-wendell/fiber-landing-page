import { SignInForm } from '../../components/SignInForm';
import exampleImage from '../../assets/sign-up-image.png';
import './style.css';

export const SignIn = () => {
	return (
		<main className="main">
			<section className="formSection">
				<div className="textDiv">
					<h2>Fiber</h2>
					<h2>Enter your account</h2>
				</div>
				<SignInForm />
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
