export const Form = ({ children, onSubmit }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	return (
		<form className="form" onSubmit={handleSubmit(onSubmit)}>
			{children}
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
