import { useEffect, useState } from "react";
import Message from "../message/Message";
import "./ChatBody.css";
import { FaRocketchat } from "react-icons/fa";

const ChatBody = () => {
	const [messages, setMessages] = useState(null);

	//Note: Dummy array Once we have endpoints then we will remove this
	const data = [
		{
			text: "How can I help you",
			fromMe: false,
		},
		{
			text: "I want to ask you a question",
			fromMe: true,
		},
	];
	useEffect(() => {
		setMessages(data);
	}, []);

	return (
		<ul className="chatbot_body">
			{messages?.map((data, index) => (
				<Message message={data} key={index} />
			))}
		</ul>
	);
};

export default ChatBody;
