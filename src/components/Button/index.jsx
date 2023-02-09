import './style.css';

export const Button = ({ state = 'primary', width, children }) => {
	const stylesOptions = {
		primary: { color: '#fff', backgroundColor: '#4e13d1' },
		secondary: { color: '#0c0b07', backgroundColor: 'transparent' },
		tertiary: {
			color: '#4e13d1',
			backgroundColor: '#fff',
		},
		quaternary: {
			color: '#4e13d1',
			backgroundColor: 'transparent',
			border: '1px solid #ddd',
		},
	};
	const styles = stylesOptions[state];

	return (
		<button style={{ width, ...styles }} className="button">
			{children}
		</button>
	);
};
