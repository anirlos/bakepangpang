import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const EmptyCart: FC = () => {
  return (
    <EmptyCartWrap>
      <p>장바구니에 담긴 상품이 없습니다.</p>
      <Link to={"/"}>
        <ShoppingButton>쇼핑하러 가기</ShoppingButton>
      </Link>
    </EmptyCartWrap>
  );
};

export default EmptyCart;

const EmptyCartWrap = styled.div`
  width: 100%;
  min-height: 215px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  text-align: center;
  margin-bottom: 30px;
  background-color: #f4f6fa;
  p {
    font-size: 1.125rem;
    font-weight: 700;
    color: #55575f;
  }
`;

const ShoppingButton = styled.button`
  font-size: 1.25rem;
  font-weight: 700;
  display: inline-block;
  margin: 30px auto 0;
  width: 200px;
  line-height: 18px;
  border: 2px solid #0073e9;
  border-radius: 4px;
  padding: 15px 0;
  text-align: center;
  background-color: #0073e9;
  color: #fff;
  cursor: pointer;
`;
