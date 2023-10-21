import React from "react";
import styled from "styled-components";
import 평점 from "../../assets/mainImg/평점.png";
import 로켓 from "../../assets/mainImg/로켓배송.png";
import { StItemContent } from "../../styles/ItemCard.styled";
import { Link } from "react-router-dom";

interface propsType {
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

const ItemCard = (props: propsType) => {
  console.log(props);
  return (
    <>
      <StItemContent key={props.name}>
        <div className="item" key={props.category.categoryName}>
          <div className="item__img">
          <Link to={`/product/detail/${props.name}`}>
            <img src={props.img1} />
            </Link>
          </div>
          <div className="itme__contents">
          <Link to={`/product/${props.name}`} className="item__name">
              {props.name}
            </Link>
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
    </>
  );
};

export default ItemCard;
