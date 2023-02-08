import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './style.css';

export const SignInForm = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = data => console.log(data);

	return (
		<form className="form" onSubmit={handleSubmit(onSubmit)}>
			<label>
				E-mail
				<input
					type="email"
					placeholder="john@example.com"
					{...register('email')}
				/>
			</label>
			<label>
				Password
				<input
					type="password"
					placeholder="At least 8 characters"
					{...register('password', { required: true, minLength: 3 })}
				/>
			</label>
			<input
				type="checkbox"
				name="terms"
				id="terms"
				{...register('terms', { required: true })}
			/>
			<label htmlFor="terms">
				By creating an account on Fiber, you agree to the{' '}
				<a href="">Terms & Conditions</a>.
			</label>

			<div className="buttonDiv">
				<button>Create Fiber Account</button>
				<p>
					Don't have an account?<Link to="/signUp">Sign up</Link>
				</p>
			</div>
		</form>
	);
};
