import axios from "axios";
import { axiosInstance } from "./core";

const PATH = "/api/product";

const ProductApi = {
	getProductList: async () => await axiosInstance.get(PATH),
	getProductDetail: async id =>
		await axiosInstance.get(PATH + `/detail?prod_idx=${id}`),
	deleteProduct: async id => await axios.delete(PATH + `?prod_idx=${id}`),
	updateProductStatus: async id =>
		await axios.post(PATH + `/sale-complete?prod_idx=${id}`),
	updateLikeStatus: async params =>
		await axiosInstance.post(PATH + `/like`, (params = { ...params })),
	addProduct: async productData => await axios.post(PATH, productData),
};

export default ProductApi;
