import './style.css';

export const AssessmentCard = ({ name, revenue, text, avatar }) => {
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
			<button>teste</button>
		</div>
	);
};
