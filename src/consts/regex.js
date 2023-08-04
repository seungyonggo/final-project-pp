export const REGEX = {
	email: /^[a-z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/i,
	password: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-?~.,/])(?=.*[0-9]).{8,30}$/,
	nickName: /^[가-힣0-9a-zA-Z]+$/,
	region: /\S+/,
	phone: /^01([0|1|6|7|8|9])-([0-9]{4})-([0-9]{4})$/,
};
