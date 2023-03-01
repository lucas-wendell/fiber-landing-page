import './style.css';
import { Link } from 'react-router-dom';

import { Button } from '../Button';
import { useForm } from 'react-hook-form';

import { Input } from '../../components/Input';
import { useContext, useState } from 'react';

import { GlobalContext } from '../../context';
import { Modal } from '../Modal';

export const SignUpForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const { createUser, users } = useContext(GlobalContext);
	const [erroModal, setErroModal] = useState({
		erro: false,
		message: '',
	});

	const onSubmit = data => {
		delete data.checkbox;
		const emailIsInvalid = users.some(({ email }) => email === data.email);

		if (emailIsInvalid) {
			console.log('entrou aqui');
			setErroModal({
				erro: true,
				message: 'Email already exists',
			});
			return;
		}
		createUser(data);
	};

	return (
		<>
			{erroModal.erro && (
				<Modal setErro={setErroModal}>{erroModal.message}</Modal>
			)}
			<form className="SignUpForm" onSubmit={handleSubmit(onSubmit)}>
				<Input
					labelText="Your Name"
					type="text"
					placeholder="John Doe"
					register={register('name', {
						required: 'Required',
						minLength: {
							value: 3,
							message: 'Your name must be more than 3 characters',
						},
					})}
					error={errors.name}
				/>
				<Input
					labelText="E-mail"
					type="email"
					placeholder="john@example.com"
					register={register('email', {
						required: 'Required',
						pattern: {
							value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
							message:
								'Entered value does not match email format, enter a valid email address.',
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

				<label className="labelCheckbox">
					<input
						type="checkbox"
						{...register('checkbox', {
							required: 'Required',
						})}
					/>
					<p>
						By Creating an account on Fiber, you agree to the{' '}
						<span>Terms & Conditions</span>.
					</p>
				</label>

				<div className="buttonDiv">
					<Button width={'100%'}>Create Fiber Account</Button>
					<p className="link">
						<span>Already have an account?</span>
						<Link to="/SignIn">Sign in</Link>
					</p>
				</div>
			</form>
		</>
	);
};

export default SignUpForm;
