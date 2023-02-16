import './style.css';

export const Input = ({ labelText, type, placeholder, register, error }) => {
	return (
		<label className="label">
			{labelText}
			<input
				className="input"
				error={error ? 'true' : 'false'}
				type={type}
				{...register}
				placeholder={placeholder}
			/>
			{error && <span className="errorMessage">{error.message}</span>}
		</label>
	);
};

export default Input;
