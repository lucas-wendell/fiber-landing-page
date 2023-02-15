import './style.css';
import { Link } from 'react-router-dom';

import { Button } from '../Button';
import { useForm } from 'react-hook-form';

export const SignInForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = data => {
		console.log(data);
	};

	return (
		<form className="form" onSubmit={handleSubmit(onSubmit)}>
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

			<div className="buttonDiv">
				<Button width={'100%'}>Enter your account</Button>
				<p className="link">
					<span>Don't have an account?</span>
					<Link to="/signUp">Sign up</Link>
				</p>
			</div>
		</form>
	);
};
