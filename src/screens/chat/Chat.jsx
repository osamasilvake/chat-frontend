import { useState } from "react";
import CircleButton from "../../components/circle-button/CircleButton";
import ChatBot from "../../components/chatbot/ChatBot";

function Chat() {
	const [modalOpen, setModalOpen] = useState(true);

	const toggleModal = () => {
		setModalOpen(!modalOpen);
	};

	return (
		<>
			<div>{modalOpen && <ChatBot toggleModal={toggleModal} modalOpen={modalOpen} />}</div>
			{/* <div>
				<CircleButton toggleModal={toggleModal} modalOpen={modalOpen} />
			</div> */}
		</>
	);
}

export default Chat;
