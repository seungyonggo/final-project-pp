import React from "react";
import Banner from "./components/Banner";
import Slogan from "./components/Slogan";
import styled from "styled-components";
import RecentlyClicked from "components/RecentlyClicked";
import UsedProduct from "./components/UsedProducts";
import FreeProduct from "./components/FreeProducts";
import ProductQueryApi from "apis/product.query.api";
import { useQueryClient } from "react-query";
import Loading from "components/Loading";

const Main = () => {
	const queryClient = useQueryClient();

	const { data, isLoading, error } = ProductQueryApi.getProductList();

	if (isLoading) return <Loading />;

	if (error) {
		window.location.reload();
		queryClient.refetchQueries(QueryKey.productData);
	}

	return (
		<>
			<Banner />
			<Slogan />
			<UsedProduct list={data?.usedProduct} />
			<S.DivisionLine />
			<FreeProduct list={data?.freeProduct} />
			<RecentlyClicked />
		</>
	);
};

export default Main;

const DivisionLine = styled.hr`
	width: 600px;
	height: 1px;
	background-color: #cccccc;
	margin: 0 auto;
`;

const S = { DivisionLine };
