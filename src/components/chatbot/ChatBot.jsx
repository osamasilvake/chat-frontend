import "./ChatBot.css";

import ChatHeader from "../chat-header/ChatHeader";
import ChatBody from "../chat-body/ChatBody";

const ChatBot = () => {
	return (
		<section className="chatbot">
			<ChatHeader />
			<ChatBody />
		</section>
	);
};

export default ChatBot;
