// import Chat from "./screens/chat/Chat";
import { useState } from "react";
import "./App.css";

function App() {
	const [modalOpen, setModalOpen] = useState(true);
	const toggleModal = () => {
		setModalOpen(!modalOpen);
	};

	return (
		<div className="relative">
			{modalOpen && (
				<div className="h-[80vh] bg-red-500  w-80 max-w-[400px] fixed bottom-24 right-4 z-20">
					<header className=" bg-green-400 p-3">
						<h1>hello chat</h1>
					</header>
					<div className="overflow-y-auto h-[66vh] px-6">
						<p>uam explicabo animi ducimus deleniti</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia odio
							cum quod! Commodi, consequatur repellendus architecto sequi earum
							assumenda beatae cum aut debitis exercitationem amet esse cumque enim
							rem, consequuntur, inventore praesentium velit. Unde accusantium
							excepturi quod ullam repellendus doloremque quidem similique repudiandae
							voluptatem? Laborum similique illo deserunt error, asperiores sapiente
							ab, consequuntur quae quia velit minima mollitia voluptas quidem ex sit
							facere fugit illum iusto iste in maxime quaerat eius possimus. Iste
							officiis doloremque perferendis voluptate eos tenetur? Exercitationem
							amet iusto optio, libero ad aliquid ratione tempore id soluta
							reprehenderit nostrum possimus debitis ea laborum voluptas quibusdam,
							temporibus corporis at necessitatibus eius quae? Accusantium voluptas
							aspernatur, asperiores incidunt molestiae iure aliquid assumenda quis
							saepe perferendis quos harum voluptatem nobis quod aliquam possimus
							totam consequuntur itaque nihil iste molestias explicabo distinctio.
							Tenetur atque voluptas animi nulla soluta totam rem iste, eveniet, dicta
							necessitatibus voluptatum itaque repellat quam illo officia ratione.
						</p>
					</div>
					<div className="flex w-full absolute bottom-0">
						<input type="text" placeholder="Enter Text" className=" w-full" />
						<button className=" bg-white py-2">send</button>
					</div>
				</div>
			)}
			<div className="relative">
				<button
					onClick={toggleModal}
					className="fixed bottom-4 right-6 bg-green-400 rounded-full w-16 h-16"
				>
					{modalOpen ? "✖" : "💬"}
				</button>
			</div>
		</div>
		// <Chat />
	);
}

export default App;
