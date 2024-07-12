import "./CircleButton.css";

const CircleButton = (props) => {
	const { toggleModal, modalOpen } = props;

	return (
		<div className="circle_btn">
			<button onClick={toggleModal} className={modalOpen ? "" : "spin-animation"}>
				{modalOpen ? "✖" : "💬"}
			</button>
		</div>
	);
};

export default CircleButton;
