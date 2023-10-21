// Header.tsx

import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Cart from "./Cart";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 50px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  border-bottom: 1px solid #ccc;
`;

const Logo = styled(Link)`
  margin-left: 7rem;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
`;

const SearchBar = styled.input`
  padding: 15px;
  width: 600px;
  border: 2px solid blue;
  background-color: #fff;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 14rem;
`;

const Button = styled.button`
  padding: 10px 10px;
  font-size: 0.9rem;
  cursor: pointer;
  margin-left: 1rem;
`;

const Header: React.FC = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");

  return (
    <div>
      {location.pathname !== "/cart" && (
        <Navbar>
          <Logo to="/">Bakepang</Logo>
          <SearchBar type="text" placeholder="Search" />
          <ButtonContainer>
            {/* 토큰 유무에 따라 링크 목적지 설정 */}
            <Link to={token ? "/user/cart" : "/login"}>
              <Button>마이쿠팡</Button>
            </Link>
            <Link to="/cartlist">
              <Button>장바구니</Button>
            </Link>
          </ButtonContainer>
        </Navbar>
      )}
    </div>
  );
};

export default Header;
