import styled from "styled-components";
import Nav from "../../nav";

const AccountPrivacy = () => {
	return (
		<S.MasterWrapper>
			<S.NavWrapper>
				<Nav />
			</S.NavWrapper>
			<S.PrivacyWrapper>
				<S.PrivacyCorrectionWrapper>
					<S.PrivacyCorrection>개인 정보 수정</S.PrivacyCorrection>
				</S.PrivacyCorrectionWrapper>
				<S.Line />
				<S.Account>내 계정</S.Account>
				<S.EmailTitle>이메일 주소</S.EmailTitle>
				<S.EmailContainer>
					<S.Email>s******1@naver.com</S.Email>
					<ChangeBtn>변경</ChangeBtn>
				</S.EmailContainer>
				<S.Line />
				<S.PasswordTitle>비밀번호</S.PasswordTitle>
				<S.PasswordContainer>
					<S.Password>●●●●●●●●●●</S.Password>
					<ChangeBtn>변경</ChangeBtn>
				</S.PasswordContainer>
				<S.Line />
				<S.Privacy>개인정보</S.Privacy>
				<S.PhoneNumberTitle>휴대폰 번호</S.PhoneNumberTitle>
				<S.PhoneNumberContainer>
					<S.PhoneNumber>010-3038-0098</S.PhoneNumber>
					<ChangeBtn>변경</ChangeBtn>
				</S.PhoneNumberContainer>
				<S.Line />
				<S.TrandingAreaTitle>주 거래 지역</S.TrandingAreaTitle>
				<S.TrandingAreaContainer>
					<S.TrandingArea>서울 성수동</S.TrandingArea>
					<ChangeBtn>변경</ChangeBtn>
				</S.TrandingAreaContainer>
				<S.Line />
				<S.Withdrawal>회원탈퇴</S.Withdrawal>
			</S.PrivacyWrapper>
		</S.MasterWrapper>
	);
};

export default AccountPrivacy;

const MasterWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;
const NavWrapper = styled.div`
	padding-top: 124px;
`;
const PrivacyWrapper = styled.div`
	width: 1060px;
	padding: 60px;
	margin: 100px 50px;
`;
const PrivacyCorrectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
const PrivacyCorrection = styled.div`
	font-size: 24px;
	font-weight: 1000;
	margin-bottom: 16px;
`;
const Line = styled.div`
	width: 950px;
	background-color: #dddddd;
	height: 1px;
	margin: 14px 0;
`;
const Account = styled.div`
	margin-top: 100px;
	font-size: 20px;
	font-weight: 1000;
`;
const EmailContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const EmailTitle = styled.div`
	margin-top: 40px;
	color: #8a8a8a;
`;
const Email = styled.div`
	margin-top: 16px;
`;
const PasswordTitle = styled.div`
	margin-top: 40px;
	color: #8a8a8a;
`;
const PasswordContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Password = styled.div`
	margin-top: 16px;
`;
const Privacy = styled.div`
	margin-top: 80px;
	font-size: 20px;
	font-weight: 1000;
`;
const PhoneNumberTitle = styled.div`
	margin-top: 40px;
	color: #8a8a8a;
`;
const PhoneNumberContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const PhoneNumber = styled.div`
	margin-top: 16px;
`;
const TrandingAreaTitle = styled.div`
	margin-top: 40px;
	color: #8a8a8a;
`;
const TrandingAreaContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const TrandingArea = styled.div`
	margin-top: 16px;
`;
const Withdrawal = styled.div`
	margin-top: 100px;
	border-bottom: 1px solid #a9a9a9;
	width: 64px;
	color: #a9a9a9;
	font-size: 14px;
`;
const ChangeBtn = styled.div`
	width: 70px;
	height: 30px;
	border: 2px solid #000;
	text-align: center;
	font-size: 16px;
	color: white;
	background-color: #222;
	cursor: pointer;
`;

const S = {
	PrivacyWrapper,
	NavWrapper,
	MasterWrapper,
	PrivacyCorrectionWrapper,
	PrivacyCorrection,
	Line,
	Account,
	Email,
	Password,
	Privacy,
	PhoneNumber,
	TrandingArea,
	Withdrawal,
	ChangeBtn,
	EmailTitle,
	PasswordTitle,
	PhoneNumberTitle,
	TrandingAreaTitle,
	EmailContainer,
	PasswordContainer,
	PhoneNumberContainer,
	TrandingAreaContainer,
};
