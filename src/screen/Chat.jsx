import { useState } from "react";
import ButtonCircle from "../components/ButtonCircle";
import ChatBot from "../components/ChatBot";

function Chat() {
	const [modalOpen, setModalOpen] = useState(false);

	const toggleModal = () => {
		setModalOpen(!modalOpen);
	};

	return (
		<div>
			{modalOpen && <ChatBot />}
			<div>
				<ButtonCircle toggleModal={toggleModal} modalOpen={modalOpen} />
			</div>
		</div>
	);
}

export default Chat;
