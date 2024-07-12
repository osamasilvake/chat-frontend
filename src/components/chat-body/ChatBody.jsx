import { useEffect, useRef, useState } from "react";
import Message from "../message/Message";
import "./ChatBody.css";
import ChatFooter from "../chat-footer/ChatFooter";
import { data } from "./ChatBody.list";

const ChatBody = () => {
	const [messages, setMessages] = useState(null);
	const chatboxRef = useRef(null);

	useEffect(() => {
		if (chatboxRef.current) {
			chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
		}
	}, [messages]);

	useEffect(() => {
		setMessages(data);
	}, []);

	return (
		<div>
			<ul className="chatbot_body" ref={chatboxRef}>
				{messages?.map((data, index) => (
					<Message message={data} key={index} />
				))}
			</ul>
			<div>
				<ChatFooter messages={messages} setMessages={setMessages} />
			</div>
		</div>
	);
};

export default ChatBody;
