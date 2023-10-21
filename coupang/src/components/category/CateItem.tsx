import React from 'react';
import styled from 'styled-components';
import 평점 from '../../assets/mainImg/평점.png';
import 로켓 from '../../assets/mainImg/로켓배송.png';
import { StItemContent } from '../../styles/ItemCard.styled';

export interface propsType {
	id: number;
	name: string;
	category: {
		categoryId: number;
		categoryName: string;
	};
	img1: string;
	img2: string;
	img3: string;
	price: number;
	stockQuantity: number;
	registerDate: string;
	fieldPredictedSaleEndDate: string;
	click: number;
}

const CateItem = (props: propsType) => {
	return (
		<div>
			<StItemContent key={props.id}>
				<div className="item" key={props.category.categoryId}>
					<div className="item__img">
						<img src={props.img1} />
					</div>
					<div className="itme__contents">
						<a href="#" className="item__name">
							{props.name}
						</a>
						<div className="item__flex">
							<span className="item__price">{props.price}원</span>
							<img src={로켓} className="png__rocket" />
						</div>
						<p>무료배송</p>
						<div className="star">
							<img src={평점} className="star__png" />
							{props.click}+
						</div>
					</div>
				</div>
			</StItemContent>
		</div>
	);
};

export default CateItem;
