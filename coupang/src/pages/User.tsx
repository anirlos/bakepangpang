import React from "react";
import TopNav from "../components/haed/TopNav";
import Category from "../components/haed/Category";
import { StSearchBox } from "../styles/Search.Styled";
import { FaSearch } from "react-icons/fa";
import MyCoupang from "../components/haed/MyCoupang";
import Cart from "../components/haed/Cart";
import bakepang from "../assets/headerImg/Bakepang.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SalesListPage from "./SalesListPage";
import CartPage from "./CartPage";

const User = () => {
  // const [userInput, setUserInput] = useState("");
  const [search, setSearch] = useState("");
  const [callbackSearch, setcallbackSearch] = useState("");
  const [showSalesList, setShowSalesList] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  //검색 내용 입력 후 엔터키 눌렀을때
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      let keyword = e.currentTarget.value;
      navigate(`/?q=${keyword}`);
      setcallbackSearch(search);
    }
  };

  const toggleSalesList = () => {
    setShowSalesList(!showSalesList);
    setShowCart(false); // 판매목록을 표시할 때 장바구니 목록 숨기기
  };

  const toggleCart = () => {
    setShowCart(!showCart);
    setShowSalesList(false); // 장바구니 목록을 표시할 때 판매목록 숨기기
  };

  return (
    <Container>
      <TopNav />
      <header className="header">
        <Category />
        <a href="/">
          <img className="logo" src={bakepang} alt="베이크팡" />
        </a>

        <StSearchBox>
          <div className="form">
            <input
              className="input"
              placeholder="찾고 싶은 상품을 검색해보세요!"
              onChange={getValue}
              onKeyDown={handleKeyDown}
            />
            <FaSearch className="search__icon" />
          </div>
        </StSearchBox>

        <MyCoupang />
        <Cart />
      </header>
      <Menu>
        <LeftMenu>
          <MyMenuTitle>
            <div>
              <span>MY쿠팡</span>
            </div>
          </MyMenuTitle>
          <MyMenu>
            <h2>쿠팡메뉴</h2>
            <nav>
              <div>
                <p>My 쇼핑</p>
                <span onClick={toggleCart}>장바구니 목록</span>
                <span onClick={toggleSalesList}>판매목록</span>
                <span>구매목록</span>
              </div>
              <div>
                <p>My 정보</p>
                <span>개인정보확인</span>
                <span>결제수단 페이관리</span>
              </div>
            </nav>
          </MyMenu>
        </LeftMenu>
        <RightMenu>
          <ul>
            <li>
              <p>미사용티켓</p>
              <div>
                <span>0장</span>
              </div>
            </li>
            <li>
              <p>배송중</p>
              <div>
                <span>0개</span>
              </div>
            </li>
            <li>
              <p>할인쿠폰</p>
              <div>
                <span>0장</span>
              </div>
            </li>
            <li>
              <p>쿠페이 머니</p>
              <div>
                <span>쿠팡 캐시</span>
              </div>
            </li>
          </ul>
          {showSalesList && <SalesListPage />}
          {showCart && <CartPage />}
        </RightMenu>
      </Menu>
    </Container>
  );
};

export default User;

const Container = styled.div`
  position: relative;
  width: 75vw;

  margin: 0 auto;
  /* overflow-x: hidden;
  overflow-y: hidden; */

  .header {
    width: 75vw;
    margin: auto;
    display: flex;
    /* gap: 50px; */
    align-items: center;
    justify-content: center;
    /* padding-top: 25px; */
    z-index: 20;
    position: relative;
    margin-bottom: 20px;
    /* margin-bottom: 30px; */
    @media screen and (max-width: 768px) {
      width: 90vw;
    }
  }
  .logo {
    margin-left: 20px;
    padding-right: 10px;
    width: 170px;
    height: 50px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      width: 60px;
      height: 30px;
      margin-left: 5px;
      padding-right: 2px;
    }
  }
`;

const LeftMenu = styled.div`
  width: 15%;
`;

const MyMenuTitle = styled.div`
  height: 122px;
  padding: 1px;
  background: rgb(40, 109, 180);
  text-align: center;
  box-sizing: border-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  div {
    box-sizing: border-box;
    span {
      width: 95px;
      height: 30px;
      color: rgb(255, 255, 255);
      text-indent: inherit;
      text-align: center;
      font-size: 32px;
      font-weight: 400;
      letter-spacing: -2px;
    }
  }
`;

const Menu = styled.div`
  width: 100%;
  display: flex;
`;

const MyMenu = styled.div`
  background-color: rgb(249, 249, 249);
  border-width: 0px 1px 1px;
  border-style: solid;
  border-color: rgb(225, 228, 230);
  border-image: initial;
  color: rgb(17, 17, 17);
  padding: 10px 0px;
  margin-bottom: 10px;
  h2 {
    overflow: hidden;
    height: 1px;
    width: 1px;
    position: absolute;
    text-indent: -9999px;
    text-align: left;
  }
  nav {
    margin-top: 10px;

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 20px;
      border-bottom: 1px solid #ddd;
      width: 80%;
      margin: 0 auto;
      &:last-child {
        border-bottom: none;
      }
      p {
        font-weight: bold;
        font-size: 18px;
        line-height: 20px;
        color: rgb(17, 17, 17);
        margin: 20px 0;
      }
      span {
        display: block;
        font-size: 13px;
        line-height: 16px;
        margin: 10px 0;
        &:last-child {
          margin-bottom: 20px;
        }
      }
    }
  }
`;

const RightMenu = styled.div`
  height: auto;
  margin-bottom: 40px;
  width: 85%;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(130, 188, 226);
    color: rgb(255, 255, 255);

    height: 122px;
    font-weight: 100;
    font-style: normal;
    box-sizing: border-box;
    font-family: robotoThinNumber, roboto, "Courier New", Tahoma, NanumGothic,
      MalgunGothic, 돋움, dotum, sans-serif;

    li {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      min-width: 20%;
      height: 120px;
      padding: 30px 0 10px 20px;

      border-right: 2px solid #fff;

      box-sizing: border-box;
      &:last-child {
        border-right: none;
      }
      p {
        display: block;
        margin-bottom: 13px;
        height: 21px;
        color: rgb(255, 255, 255);
        font-size: 15px;
        font-weight: bold;
        text-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px;
        font-family: AppleSDGothicNeo;
      }
      div {
        span {
          color: rgb(255, 255, 255);
          font-size: 30px;
          line-height: 60px;
          cursor: pointer;
        }
      }
    }
  }
`;
