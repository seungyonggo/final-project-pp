import styled from "styled-components";
import ChatList from "./ChatList";
import Chatting from "./Chatting";
import { useEffect, useState } from "react";

const Chat = () => {
	const [targetChat, setTargetChat] = useState(
		localStorage.getItem("targetChat") || "",
	);
	const [chatData, setChatData] = useState("");
	useEffect(() => {
		window.localStorage.setItem("targetChat", targetChat);
	}, [targetChat]);

	return (
		<S.ChatRoom>
			<ChatList
				setTargetChat={setTargetChat}
				targetChat={targetChat}
				setChatData={setChatData}
			/>
			<Chatting
				targetChat={targetChat}
				chatData={chatData}
				setChatData={setChatData}
			/>
		</S.ChatRoom>
	);
};
export default Chat;

const ChatRoom = styled.div`
	width: 900px;
	display: flex;
	margin: 0 auto;
`;

const S = { ChatRoom };
