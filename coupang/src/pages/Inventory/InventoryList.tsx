import React, { useState, useEffect } from 'react';
import RegisterForm from './RegisterForm';
import { StyledInventoryList } from '../../styles/InventoryList.styles';
import axios from 'axios';

// 상품 아이템 타입
interface Item {
	id: string;
	product: string;
	price: number;
	quantity: number;
	media1: string;
	endDate: string;
}

function InventoryList() {
	const [items, setItems] = useState<Item[]>([]); // 재고 아이템 배열
	const [itemQuantities, setItemQuantities] = useState<{
		[key: string]: number;
	}>({}); // 재고 수량 조작 버튼
	const [showInvent, setShowInvent] = useState<string>('모든상품보기');

	// 저장된 데이터 불러오기
	const fetchData = async () => {
		try {
			const response = await axios.get(
				'https://post-test-f8c2d-default-rtdb.firebaseio.com/items.json'
			);
			if (response.status !== 200) {
				throw new Error('데이터 불러오기 실패');
			}
			const data: { [key: string]: any } = await response.data;

			const loadedItems: Item[] = [];
			const loadedQuantities: { [key: string]: number } = {};

			for (const key in data) {
				const quantity: number = parseInt(data[key].quantity, 10);
				loadedItems.push({
					id: key,
					product: data[key].product,
					price: data[key].price,
					quantity: quantity,
					media1: data[key].media1,
					endDate: data[key].endDate,
				});

				loadedQuantities[key] = quantity;
			}
			setItems(loadedItems);
			setItemQuantities(loadedQuantities);
		} catch (error) {
			console.error(error);
		}
	};

	// 상품 추가
	const onAddItem = async (item: Item) => {
		try {
			const response = await axios.post(
				'https://post-test-f8c2d-default-rtdb.firebaseio.com/items.json',
				item,
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);

			if (response.status === 200) {
				const data: { name: string } = response.data;
				console.log('리스트에 추가된 데이터:', data);
				setItems((prevItems) => [...prevItems, { ...item, id: data.name }]);
			} else {
				console.error('리스트 추가 실패');
			}
		} catch (error) {
			console.error(error);
		}
	};

	// 재고 수량 변경
	const handleQuantityChange = (productId: string, change: number) => {
		setItemQuantities((prevQuantity) => ({
			...prevQuantity,
			[productId]: (prevQuantity[productId] || 0) + change,
		}));
	};

	const formatDate = (date: string) => {
		const parsedDate = Date.parse(date);
		if (!isNaN(parsedDate)) {
			const formattedDate = new Date(parsedDate);
			return formattedDate.toISOString().split('T')[0];
		}
		return null;
	};

	// 재고 필터
	const filterItems = () => {
		switch (showInvent) {
			case '모든상품보기':
				return items;
			case '판매중 상품보기':
				return items.filter((item) => {
					if (!item.endDate) {
						console.error(`판매 종료일 없음: ${item.product}`);
						return false; // 판매 종료일 없는 항목 제외
					}
					const endDate = new Date(item.endDate);
					const today = new Date();
					if (isNaN(endDate.getTime())) {
						console.error(`올바르지 않은 날짜 형식: ${item.endDate}`);
						return false; // 올바르지 않은 날짜 형식을 가진 항목 제외
					}
					return endDate >= today;
				});
			case '판매완료 상품보기':
				return items.filter((item) => {
					if (!item.endDate) {
						console.error(`판매 종료일 없음: ${item.product}`);
						return false; // 판매 종료일 없는 항목 제외
					}
					const endDate = new Date(item.endDate);
					const today = new Date();
					if (isNaN(endDate.getTime())) {
						console.error(`올바르지 않은 날짜 형식: ${item.endDate}`);
						return false; // 올바르지 않은 날짜 형식을 가진 항목 제외
					}
					return endDate < today;
				});
			default:
				return items;
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<StyledInventoryList>
			<h4>상품 목록 및 재고관리</h4>
			<div className="select-container">
				<select onChange={(e) => setShowInvent(e.target.value)}>
					<option value="모든상품보기">모든상품보기</option>
					<option value="판매중 상품보기">판매중 상품보기</option>
					<option value="판매완료 상품보기">판매완료 상품보기</option>
				</select>
			</div>
			<table>
				<thead>
					<tr>
						<th>상품명</th>
						<th>미디어</th>
						<th>가격</th>
						<th>재고관리</th>
						<th>판매종료일</th>
					</tr>
				</thead>
				<tbody>
					{filterItems().map((item) => (
						<tr key={item.id}>
							<td>{item.product}</td>
							<td>{item.media1}</td>
							<td>{item.price}원</td>
							<td>
								<div className="quantity">
									<p>{itemQuantities[item.id] || 0}</p>
									<div className="quantity-button">
										<button
											className="button"
											onClick={() => handleQuantityChange(item.id, 1)}
										>
											+
										</button>
										<button
											className="button"
											onClick={() => handleQuantityChange(item.id, -1)}
										>
											-
										</button>
									</div>
								</div>
							</td>
							<td>{item.endDate}</td>
						</tr>
					))}
				</tbody>
			</table>
			<RegisterForm onAddItem={onAddItem} />
		</StyledInventoryList>
	);
}

export default InventoryList;
