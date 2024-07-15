import { FaRocketchat } from "react-icons/fa";

const Message = ({ message }) => {
	return (
		<div>
			<li className="flex list-none mb-4">
				<span className="text-center leading-8 self-end text-xl mb-2 mx-2 text-gray-400">
					<FaRocketchat />
				</span>
				<p className="bg-gray-100 rounded py-2 px-2">{message.text}</p>
			</li>
			<li className="flex mb-4 justify-end">
				<p className=" bg-green-200 rounded py-2 px-2">{message.text}</p>
			</li>
		</div>
	);
};

export default Message;
