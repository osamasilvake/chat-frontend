import "./ButtonCircle.css";

const ButtonCircle = (props) => {
	const { toggleModal, modalOpen } = props;

	return (
		<div className="toggle_btn">
			<button onClick={toggleModal} className={modalOpen ? "" : "spin-animation"}>
				{modalOpen ? "✖" : "💬"}
			</button>
		</div>
	);
};

export default ButtonCircle;
