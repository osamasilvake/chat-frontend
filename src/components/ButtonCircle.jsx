const ButtonCircle = (props) => {
	const { toggleModal, modalOpen } = props;

	return (
		<div>
			<div className="toggle_btn">
				<button onClick={toggleModal} className={modalOpen ? "" : "spin-animation"}>
					{modalOpen ? "✖" : "💬"}
				</button>
			</div>
		</div>
	);
};

export default ButtonCircle;
