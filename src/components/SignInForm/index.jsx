import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './style.css';
import { Button } from '../Button';

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
