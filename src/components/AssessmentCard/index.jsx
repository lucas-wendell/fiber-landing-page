import './style.css';
import { Button } from '../Button';

export const AssessmentCard = ({ name, firstName, revenue, text, avatar }) => {
	return (
		<div className="assessmentCard">
			<div className="textDiv">
				<div className="avatarDiv">
					<img src={avatar} alt="avatar image" />
					<div className="clientInfo">
						<p className="nameParagraph">{name}</p>
						<p className="revenueParagraph">{revenue}</p>
					</div>
				</div>
				<p className="text">{text}</p>
			</div>
			<Button state="quaternary" width={'100%'}>
				View {firstName}'s Portifolio
			</Button>
		</div>
	);
};
