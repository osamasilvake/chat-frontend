import { useEffect, useState } from "react";
import Message from "./Message";
import ChatInput from "./ChatInput";

const ChatBot = () => {
	const [messages, setMessages] = useState(null);
	const [text, setText] = useState("");

	const onChangeHandler = (value) => {
		setText(value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const data = {
			text: text,
		};
		setMessages([...messages, data]);
		setText("");
	};

	//Note: Dummy array Once we have endpoints then we will remove this
	const data = [
		{
			text: "How can I help you",
		},
		{
			text: "I want to ask you a question",
		},
	];
	useEffect(() => {
		setMessages(data);
	}, []);

	return (
		<div className="chatbot">
			<header>
				<h1>Chatbot</h1>
			</header>
			<main>
				<ul className="chatbox">
					{messages?.map((data, index) => (
						<Message message={data} key={index} />
					))}
				</ul>
			</main>
			<div>
				<ChatInput onChangeHandler={onChangeHandler} submitHandler={submitHandler} />
			</div>
		</div>
	);
};

export default ChatBot;
