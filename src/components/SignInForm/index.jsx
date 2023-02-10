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
		console.log(errors);
		console.log(data);
	};

	return (
		<form className="form" onSubmit={handleSubmit(onSubmit)}>
			<label>
				E-mail
				<input
					type="email"
					placeholder="john@example.com"
					{...register('email', {
						required: 'This field is required! Please, insert a value',
					})}
				/>
			</label>
			<label>
				Password
				<input
					type="password"
					placeholder="At least 8 characters"
					{...register('password', {
						required: 'This field is required! Please, insert a value',
						minLength: {
							value: 3,
							message: 'Your password must be more than 3 characters',
						},
					})}
				/>
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
