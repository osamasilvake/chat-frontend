// import "./ChatBot.css";

import { useEffect, useRef, useState } from "react";
import { data } from "../chat-body/ChatBody.list";
import Message from "../message/Message";
// import ChatHeader from "../chat-header/ChatHeader";
// import ChatBody from "../chat-body/ChatBody";

const ChatBot = (props) => {
	const { toggleModal, modalOpen } = props;
	const [messages, setMessages] = useState([]);
	const scrollRef = useRef(null);
	const [text, setText] = useState("");

	const onChangeHandler = (value) => {
		setText(value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		const data = {
			fromMe: true,
			text: text,
		};
		setMessages([...messages, data]);
		setText("");
	};

	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
		}
	}, [messages]);

	useEffect(() => {
		setMessages(data);
	}, []);

	return (
		// <section className="chatbot">
		// 	<ChatHeader />
		// 	<ChatBody />
		// </section>
		<div className="fixed bottom-0 right-0 z-50 w-full  max-w-full sm:max-w-[500px] sm:p-1 xl:right-1 h-full">
			<div className="flex h-[580px] flex-col rounded border bg-white shadow-xl">
				<header className=" bg-green-300 py-3 px-3">
					<h1 className="text-white text-lg">chatbot</h1>
				</header>
				<div className="mt-3 h-full overflow-y-auto px-3" ref={scrollRef}>
					<ul className="px-3">
						{messages.map((message) => (
							<Message message={message} key={message.id} />
						))}
					</ul>
				</div>
				<form onSubmit={submitHandler} className="m-3 flex gap-1">
					<input
						value={text}
						onChange={(e) => onChangeHandler(e.target.value)}
						placeholder="Say something..."
						className="grow rounded border bg-background px-3 py-2"
					/>
					<button
						type="submit"
						className="flex w-10 flex-none items-center justify-center disabled:opacity-50"
						disabled={text.length === 0}
						title="Submit message"
					>
						➤
					</button>
				</form>
			</div>
			<button onClick={toggleModal} className="">
				{modalOpen ? "✖" : "💬"}
			</button>
		</div>
	);
};

export default ChatBot;
