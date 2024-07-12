import { useState } from "react";
import CircleButton from "../../components/circle-button/CircleButton";
import ChatBot from "../../components/chatbot/ChatBot";

function Chat() {
	const [modalOpen, setModalOpen] = useState(false);

	const toggleModal = () => {
		setModalOpen(!modalOpen);
	};

	return (
		<>
			<div>{modalOpen && <ChatBot />}</div>
			<div>
				<CircleButton toggleModal={toggleModal} modalOpen={modalOpen} />
			</div>
		</>
	);
}

export default Chat;
