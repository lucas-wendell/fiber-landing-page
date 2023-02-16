import './style.css';
import { Link } from 'react-router-dom';

import { Button } from '../Button';
import { useForm } from 'react-hook-form';

export const SignUpForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = data => {
		console.log(data);
	};

	return (
		<form className="SignUpForm" onSubmit={handleSubmit(onSubmit)}>
			<label>
				Your Name
				<input
					error={errors.name ? 'true' : 'false'}
					type="text"
					placeholder="John Doe"
					{...register('name', {
						required: 'Required',
						minLength: {
							value: 3,
							message: 'Your name must be more than 3 characters',
						},
					})}
				/>
				{errors.name && (
					<span className="errorMessage">{errors.name.message}</span>
				)}
			</label>
			<label>
				E-mail
				<input
					type="email"
					error={errors.email ? 'true' : 'false'}
					placeholder="john@example.com"
					{...register('email', {
						required: 'Required',
						pattern: {
							value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
							message: 'Entered value does not match email format',
						},
					})}
				/>
				{errors.email && (
					<span className="errorMessage">{errors.email.message}</span>
				)}
			</label>
			<label>
				Password
				<input
					error={errors.password ? 'true' : 'false'}
					type="password"
					placeholder="At least 8 characters"
					{...register('password', {
						required: 'Required',
						minLength: {
							value: 3,
							message: 'Your password must be more than 3 characters',
						},
					})}
				/>
				{errors.password && (
					<span className="errorMessage">{errors.password.message}</span>
				)}
			</label>
			<label>
				<p>
					By Creating an account on Fiber, you agree to the{' '}
					<span>Terms & Conditions</span>.
				</p>
				<input
					type="checkbox"
					{...register('checkbox', {
						required: 'Required',
					})}
				/>
			</label>

			<div className="buttonDiv">
				<Button width={'100%'}>Create Fiber Account</Button>
				<p className="link">
					<span>Already have an account?</span>
					<Link to="/SignIn">Sign in</Link>
				</p>
			</div>
		</form>
	);
};

export default SignUpForm;
