const ChatInput = (props) => {
	const { onChangeHandler, submitHandler } = props;

	return (
		<form className="chat-input" onSubmit={submitHandler}>
			<input
				onChange={(e) => onChangeHandler(e.target.value)}
				type="text"
				placeholder="Enter a message..."
				spellCheck="false"
				required
			/>
			<button type="submit">➤</button>
		</form>
	);
};

export default ChatInput;
