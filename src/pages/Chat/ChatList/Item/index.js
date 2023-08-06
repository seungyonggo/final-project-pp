import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { flexColumn } from "styles/common";

const ChatItem = ({ chat, setTargetChat }) => {
	const { idx, isRead, lastMessage, product } = chat;
	// console.log("product", product);

	// 읽음
	const [isOpen, setIsOpen] = useState(false);

	// 페이지 이동
	const navigate = useNavigate();

	return (
		<>
			<S.Item>
				<S.IimgContainer>
					{!isRead && <S.New>New</S.New>}
					<S.Iimg src={product.img_url} />
				</S.IimgContainer>
				<S.TextContainer onClick={() => setTargetChat(idx)}>
					<S.ChatContent onClick={() => setIsOpen(false)}>
						<S.Iproduct>{product.title}</S.Iproduct>
						<S.Ichat>{lastMessage || "대화 내역이 존재하지 않습니다."}</S.Ichat>
						<S.Iprice>{product.price}</S.Iprice>
					</S.ChatContent>
					<S.SettingContent>
						<S.Span>
							<S.Setting onClick={() => setIsOpen(prev => !prev)}>
								...
							</S.Setting>
						</S.Span>
						{isOpen && (
							<S.SettingBox>
								<div className="read">읽음</div>
							</S.SettingBox>
						)}
						<S.Imove onClick={() => navigate(`/product/${product.idx}`)}>
							상품이동 ▶
						</S.Imove>
					</S.SettingContent>
				</S.TextContainer>
			</S.Item>
		</>
	);
};

export default ChatItem;

const Item = styled.div`
	width: 449px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid #ebebeb;
	height: 150px;
	background-color: white;
	padding: 20px;
	padding-top: 20px;
	position: relative;
	cursor: pointer;
`;

const New = styled.div`
	position: absolute;
	top: 24px;
	left: 15px;
	background-color: ${({ theme }) => theme.PALETTE.primary};
	color: ${({ theme }) => theme.PALETTE.white};
	width: 42px;
	height: 22px;
	line-height: 22px;
	border-radius: 12px;
	text-align: center;
	font-size: 12px;
	font-weight: 500;
`;

const TextContainer = styled.div`
	display: flex;
`;

const ChatContent = styled.div`
	${flexColumn}
	width: 200px;
	margin-right: 35px;
`;

const SettingContent = styled.div`
	position: relative;
	${flexColumn}
	justify-content: space-between;
`;

const IimgContainer = styled.div`
	width: 90px;
	margin-top: 10px;
	height: 90px;
	border-radius: 50%;
	overflow: hidden;
`;

const Iimg = styled.img`
	width: 100%;
	height: 100%;
`;

const Setting = styled.div`
	font-size: 16px;
	color: black;
	margin-left: 45px;
	font-weight: bold;
	cursor: pointer;
`;

const SettingBox = styled.div`
	font-size: 12px;
	position: absolute;
	top: 22px;
	border: 1px solid ${({ theme }) => theme.PALETTE.gray};
	text-align: center;
	width: 60px;
	cursor: pointer;
	background-color: white;
	.read {
		border-bottom: 1px solid ${({ theme }) => theme.PALETTE.gray};
		padding: 5px;
		:hover {
			background-color: ${({ theme }) => theme.PALETTE.primary};
			color: ${({ theme }) => theme.PALETTE.white};
		}
	}
`;

const Span = styled.span`
	color: #3cb371;
	font-size: 10px;
	display: flex;
`;

const Iproduct = styled.div`
	font-size: 16px;
	font-weight: 600;
`;

const Ichat = styled.div`
	padding-top: 5px;
	font-size: 12px;
	color: #575757;
`;

const Iprice = styled.div`
	font-size: 14px;
	padding-top: 5px;
	font-weight: 500;
`;

const Imove = styled.div`
	font-size: 12px;
	color: ${({ theme }) => theme.PALETTE.darkBlack};
	font-weight: 500;
	cursor: pointer;
	/* position: absolute; */
	/* left: 83%;
	top: 80%; */
`;

const S = {
	Item,
	New,
	TextContainer,
	IimgContainer,
	Iimg,
	Setting,
	Span,
	Iproduct,
	Ichat,
	Iprice,
	Imove,
	ChatContent,
	SettingContent,
	SettingBox,
};
