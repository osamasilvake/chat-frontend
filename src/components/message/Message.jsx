import { FaRocketchat } from "react-icons/fa";

const Message = ({ message }) => {
	return (
		<li
			className={`flex list-none my-4 ${
				message.fromMe ? "flex justify-end" : "flex justify-start"
			}`}
		>
			{!message.fromMe && (
				<span className="text-center leading-8 self-end text-xl mb-2 mx-2 text-gray-400">
					<FaRocketchat />
				</span>
			)}
			<p
				className={`rounded py-2 px-2 ${
					message.fromMe ? " bg-green-200" : " bg-slate-300"
				}`}
			>
				{message.text}
			</p>
		</li>
	);
};

export default Message;
