//SalesListPage.tsx

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SalesListContainer = styled.div`
	width: 100%;
	padding: 1rem;
	background-color: #f4f4f4;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SalesItem = styled.div`
	background-color: #fff;
	padding: 1rem;
	margin-bottom: 1rem;

	display: flex;
	align-items: center;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SalesItemImage = styled.img`
	width: 60px;
	height: 60px;
	object-fit: cover;
	margin-right: 1rem;
	border-radius: 5px;
`;

const SalesItemInfo = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

const SalesItemName = styled.span`
	font-weight: bold;
	margin-bottom: 0.5rem;
`;

const SalesItemPrice = styled.span`
	color: #e74c3c;
`;

const SalesListTitle = styled.h3`
	margin: 0; /* 기본 마진 제거 */
	margin-bottom: 1rem;
`;

const SalesListPage: React.FC = () => {
	// 예시 데이터
	const SalesData = [
		{
			id: 1,
			name: '판매 상품 A',
			price: '10,000원',
			image: 'https://via.placeholder.com/60',
		},
		{
			id: 2,
			name: '판매 상품 B',
			price: '20,000원',
			image: 'https://via.placeholder.com/60',
		},
	];

	return (
		<SalesListContainer>
			<SalesListTitle>판매 목록 리스트</SalesListTitle>
			{SalesData.map((item) => (
				<SalesItem key={item.id}>
					<SalesItemImage src={item.image} alt={item.name} />
					<SalesItemInfo>
						<SalesItemName>{item.name}</SalesItemName>
						<SalesItemPrice>{item.price}</SalesItemPrice>
					</SalesItemInfo>
				</SalesItem>
			))}
		</SalesListContainer>
	);
};

export default SalesListPage;
