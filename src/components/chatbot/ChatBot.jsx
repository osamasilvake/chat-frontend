import "./ChatBot.css";

import ChatHeader from "../chat-header/ChatHeader";
import ChatBody from "../chat-body/ChatBody";
import ChatFooter from "../chat-footer/ChatFooter";

const ChatBot = () => {
	return (
		<section className="chatbot">
			<ChatHeader />
			<ChatBody />
			<ChatFooter />
		</section>
	);
};

export default ChatBot;
