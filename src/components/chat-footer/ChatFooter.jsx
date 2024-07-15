import { useState } from "react";
import "./ChatFooter.css";

const ChatFooter = (props) => {
	const { setMessages, messages } = props;
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

	return (
		<form className="chat-input" onSubmit={submitHandler}>
			<input
				type="text"
				placeholder="Enter a message"
				spellCheck="false"
				required
				value={text}
				onChange={(e) => onChangeHandler(e.target.value)}
			/>
			<button type="submit" aria-label="Send message" disabled={!text.trim()}>
				➤
			</button>
		</form>
	);
};

export default ChatFooter;
