import { useEffect, useRef, useState } from "react";
import { data } from "../../components/chat-body/ChatBody.list";
import Message from "../../components/message/Message";

function Chat() {
	const [modalOpen, setModalOpen] = useState(false);

	const toggleModal = () => {
		setModalOpen(!modalOpen);
	};

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
		<div className="">
			{modalOpen && (
				<div className="bg-slate-100 max-w-96 border-2 m-4  shadow-sm">
					<header className=" bg-green-400 py-2 px-2">
						<h1 className="text-white text-lg">chatgpt</h1>
					</header>
					<div className="h-[70vh] overflow-auto" ref={scrollRef}>
						<ul className="px-3">
							{messages.map((message) => (
								<Message message={message} key={message.id} />
							))}
						</ul>
					</div>
					<form onSubmit={submitHandler} className="flex bg-white px-2">
						<input
							value={text}
							onChange={(e) => onChangeHandler(e.target.value)}
							className="inline-block w-full py-3 outline-none"
							placeholder="Enter message"
							type="text"
						/>
						<button className="px-4 bg-white" type="submit" disabled={!text.trim()}>
							➤
						</button>
					</form>
				</div>
			)}
			<button className="mt-3 mx-3 bg-green-400 rounded-full h-12 w-12" onClick={toggleModal}>
				{modalOpen ? "✖" : "💬"}
			</button>
		</div>
	);
}

export default Chat;
