import styled from "styled-components";

const Chatting = () => {
	return (
		<S.Container>
			<S.Header>
				<S.HChat>CHATTING</S.HChat>
			</S.Header>
			<S.ChatMain>
				<S.Chat>
					<S.day>2023.07.06</S.day>
					<S.hr />
					<S.BuyWrapper>
						<S.Buytime>10:53</S.Buytime>
						<S.Chatbuy>일이삼사오육칠팔구십일이삼사오육칠팔구십</S.Chatbuy>
					</S.BuyWrapper>
					<S.SellerWrapper>
						<S.ChatSeller>
							일이삼사오육칠팔구십일이삼사오육칠팔구십
						</S.ChatSeller>
						<S.Sellertime>10:55</S.Sellertime>
					</S.SellerWrapper>
				</S.Chat>
				<S.SendWrapper>
					<S.Message placeholder="채팅치는곳"></S.Message>
					<S.Send>전송</S.Send>
				</S.SendWrapper>
			</S.ChatMain>
		</S.Container>
	);
};

export default Chatting;

const Container = styled.div`
	width: 450px;
	border: 1px solid #ebebeb;
	margin: 100px auto;
`;

const Header = styled.div`
	width: 450px;
	height: 60px;
	display: flex;
	div {
		cursor: pointer;
		:hover {
			opacity: 0.7;
		}
	}
`;

const HChat = styled.div`
	width: 448px;
	background-color: #fcf9f3;
	font-size: 18px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
`;

const ChatMain = styled.div`
	width: 450px;
`;

const Chat = styled.div`
	padding: 20px;
	height: 450px;
	overflow-x: hidden;
	overflow-y: scroll;
	float: left;
	&::-webkit-scrollbar {
		width: 15px;
		display: none;
	}
`;

const day = styled.div`
	font-size: 16px;
	text-align: center;
	margin-bottom: 10px;
`;

const hr = styled.hr`
	width: 400px;
	color: #d9d9d9;
`;

const BuyWrapper = styled.div`
	display: flex;
	align-items: flex-end;
	width: 280px;
	float: right;
	margin-top: 20px;
	margin-bottom: 20px;
	word-wrap: break-word;
	text-align: right;
`;

const SellerWrapper = styled.div`
	display: flex;
	float: left;
	width: 280px;
	align-items: flex-end;
`;

const Buytime = styled.div`
	font-size: 8px;
	color: #242424;
	margin-right: 8px;
`;

const Sellertime = styled.div`
	font-size: 8px;
	color: #242424;
	margin-left: 8px;
`;

const Chatbuy = styled.div`
	font-size: 16px;
	padding: 10px;
	align-items: start;
	float: right;
	background-color: #e6e6e6;
	word-wrap: break-word;
	border-radius: 6px;
	text-align: right;
`;

const ChatSeller = styled.div`
	font-size: 16px;
	float: left;
	align-items: start;
	padding: 10px;
	background-color: #ffffff;
	border: 1px solid #dddddd;
	word-wrap: break-word;
	border-radius: 6px;
`;

const SendWrapper = styled.div`
	display: flex;
	height: 50px;
	justify-content: space-evenly;
	align-items: center;
	padding: 10px;
	position: sticky;
	bottom: 0;
`;

const Message = styled.input`
	width: 300px;
	padding: 8px;
	height: 40px;
	border-radius: 8px;
	border: none;
	background-color: #f4f4f4;
`;

const Send = styled.div`
	width: 100px;
	padding: 8px;
	height: 40px;
	background-color: #3cb371;
	color: #ffffff;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	text-align: center;
`;

const S = {
	Container,
	Header,
	HChat,
	ChatMain,
	Chat,
	day,
	hr,
	BuyWrapper,
	SellerWrapper,
	Buytime,
	Sellertime,
	Chatbuy,
	ChatSeller,
	SendWrapper,
	Message,
	Send,
};
