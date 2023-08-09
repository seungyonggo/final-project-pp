import axios from "axios";
import { axiosInstance } from "./core";

const PATH = "/api/product";

const ProductApi = {
	getProductList: async () => await axiosInstance.get(PATH),
	getProductDetail: async id =>
		await axiosInstance.get(PATH + `/detail?prod_idx=${id}`),
	deleteProduct: async id =>
		await axiosInstance.delete(PATH + `?prod_idx=${id}`),
	updateProductStatus: async id =>
		await axios.post(PATH + `/sale-complete?prod_idx=${id}`),
	updateLikeStatus: async params =>
		await axiosInstance.post(PATH + `/like`, (params = { ...params })),
	getRecentlyViewedProducts: async () =>
		await axiosInstance.get(PATH + "/viewed-list"),
	addRecentlyViewedProducts: async params =>
		await axiosInstance.post(PATH + "/viewed-list", (params = { ...params })),
	deleteRecentlyViewedProducts: async prod_idx =>
		await axiosInstance.delete(PATH + `/viewed-list?prod_idx=${prod_idx}`),
	// 물품 추가
	addProduct: async productData =>
		await axiosInstance.post(PATH, productData, {
			headers: { "Content-Type": "multipart/form-data" },
		}),
	// 물품 수정
	updateProduct: async productData =>
		await axiosInstance.patch(PATH, productData, {
			headers: { "Content-Type": "multipart/form-data" },
		}),

	// 물품 검색
	searchProduct: async ({ category, keyword, page, filter = "등록순" }) =>
		await axiosInstance.get(PATH + `/search`, {
			params: { category, keyword, page, filter },
		}),

	// 물품 시세 검색
	searchPriceProduct: async ({ keyword, start, end }) =>
		await axiosInstance.get(PATH + `/quote`, {
			params: { keyword, start, end },
		}),
};

export default ProductApi;
