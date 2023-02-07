import { SignInForm } from '../../components/SignInForm';
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
			<section className="carroselSection"></section>
		</main>
	);
};
