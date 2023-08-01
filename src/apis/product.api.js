import axios from "axios";
import { axiosInstance } from "./core";

const PATH = "/api/product";

const ProductApi = {
	getProductList: async () => await axios.get(PATH),
	getProductDetail: async id =>
		await axios.get(PATH + `/detail?prod_idx=${id}`),
	deleteProduct: async id => await axios.delete(PATH + `?prod_idx=${id}`),
	updateProductStatus: async id =>
		await axios.post(PATH + `/sale-complete?prod_idx=${id}`),
	updateLikeStatus: async (id, params) =>
		await axios.post(PATH + `/like??prod_idx=${id}`, (params = { ...params })),
	updateProduct: async productData =>
		await axiosInstance.post(PATH, productData),
};

export default ProductApi;
