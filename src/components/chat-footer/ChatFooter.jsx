import "./ChatFooter.css";

const ChatFooter = () => {
	return (
		<div className="chat-input">
			<input type="text" placeholder="Enter a message..." spellCheck="false" required />
			<button type="submit">➤</button>
		</div>
	);
};

export default ChatFooter;
