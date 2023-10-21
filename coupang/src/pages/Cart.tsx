// Cart.tsx

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6"
    width={50}
    height={50}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
    />
  </svg>
);

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  background-color: #ffffff;
  padding: 30px;
  //   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  margin-left: 10%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-weight: bold;
  font-size: 30px;
`;

const CartInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7%;
  margin-left: 20%;

  @media (max-width: 468px) {
    align-items: flex-start;
    margin-top: 20%;
    margin-left: 10%;
  }
`;

const Cart: React.FC = () => {
  return (
    <div>
      <StyledNavbar>
        <StyledLink to="/">Bakepang</StyledLink>
      </StyledNavbar>
      <CartInfo>
        <LogoSVG />
        <div style={{ marginTop: "3px" }}>
          <h1>장바구니</h1>
          {/* 장바구니 페이지 내용을 추가예정 */}
        </div>
      </CartInfo>
    </div>
  );
};

export default Cart;
