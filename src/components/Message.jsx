import { FaRocketchat } from "react-icons/fa";

const Message = ({ message }) => {
	return (
		<div>
			<li className="chat incoming">
				<span className="">
					<FaRocketchat />
				</span>
				<p>{message.text}</p>
			</li>
			<li className="chat outgoing">
				<p>{message.text}</p>
			</li>
		</div>
	);
};

export default Message;
