import './style.css';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '../Button';
import { useForm } from 'react-hook-form';
import { Input } from '../Input';
import { GlobalContext } from '../../context';
import { useContext } from 'react';

export const SignInForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const navigate = useNavigate();
	const { logIn } = useContext(GlobalContext);

	const onSubmit = data => {
		logIn(data);
		navigate('/');
	};

	return (
		<form className="form" onSubmit={handleSubmit(onSubmit)}>
			<Input
				labelText="E-mail"
				type="email"
				placeholder="john@example.com"
				register={register('email', {
					required: 'Required',
					pattern: {
						value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
						message: 'Entered value does not match email format',
					},
				})}
				error={errors.email}
			/>
			<Input
				labelText="Password"
				type="password"
				placeholder="At least 8 characters"
				register={register('password', {
					required: 'Required',
					minLength: {
						value: 3,
						message: 'Your password must be more than 3 characters',
					},
				})}
				error={errors.password}
			/>

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
