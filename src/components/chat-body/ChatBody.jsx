import "./ChatBody.css";
import { FaRocketchat } from "react-icons/fa";

const ChatBody = () => {
	return (
		<ul className="chatbot_body">
			<li className="chat incoming">
				<span>
					<FaRocketchat />
				</span>
				<p>
					Hi there 👋
					<br />
					How can I help you today?
				</p>
			</li>
			<li className="chat outgoing">
				<p>
					Hi there 👋
					<br />
					How can I help you today?
				</p>
			</li>
			<li className="chat incoming">
				<span>
					<FaRocketchat />
				</span>
				<p>
					Hi there 👋
					<br />
					How can I help you today?
				</p>
			</li>
			<li className="chat outgoing">
				<p>
					Hi there 👋
					<br />
					How can I help you today?
				</p>
			</li>
			<li className="chat incoming">
				<span>
					<FaRocketchat />
				</span>
				<p>
					Hi there 👋
					<br />
					How can I help you today?
				</p>
			</li>
			<li className="chat outgoing">
				<p>
					Hi there 👋
					<br />
					How can I help you today?
				</p>
			</li>
		</ul>
	);
};

export default ChatBody;
