import React from "react";
import cart from "../../assets/headerImg/cart.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <IconWrapper>
      <Link to={"/cart"}>
        <CartIcon src={cart} alt="장바구니" />
        <p>장바구니</p>
      </Link>
    </IconWrapper>
  );
};

export default Cart;

const IconWrapper = styled.div`
  cursor: pointer;

  img {
    /* margin-left: 10px; */

    width: 50px;
    height: 30px;
    padding-bottom: 5px;
    @media screen and (max-width: 768px) {
      width: 30px;
      height: 20px;
      margin-left: 0px;
    }
  }
  p {
    font-size: 0.6rem;
    text-align: center;
    @media screen and (max-width: 768px) {
      font-size: 0.3rem;
    }
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;
const CartIcon = styled.img`
  /* SVG 아이콘에 스타일을 적용할 수 있습니다. */
`;
