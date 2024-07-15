import "./Message.css";
import { FaRocketchat } from "react-icons/fa";

const Message = ({ message }) => {
	return (
		<li className={`chat ${message.fromMe ? "outgoing" : "incoming"}`}>
			{!message.fromMe && (
				<span>
					<FaRocketchat />
				</span>
			)}
			<p>{message.text}</p>
		</li>
	);
};

export default Message;
