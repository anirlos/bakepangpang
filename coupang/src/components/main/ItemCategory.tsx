import React from "react";
import styled from "styled-components";
import 빵 from "../../assets/mainImg/빵.png";
import 케이크 from "../../assets/mainImg/케이크.png";
import 잼 from "../../assets/mainImg/잼.png";

const ItemCategory = () => {
  return (
    <>
      <ItemCategoryWrap>
        <h1>카테고리</h1>
        <CategoryGrid>
          <div className="content">
            <a href="/Bread">
              <img src={빵} id="bread" />
              <p>식빵·빵류</p>
            </a>
          </div>
          <div className="content">
            <a href="/Jam">
              <img src={잼} id="jam" />
              <p>잼·버터·스프레드</p>
            </a>
          </div>
          <div className="content">
            <a href="/Cake">
              <img src={케이크} id="cake" />
              <p>케이크·파이·디저트</p>
            </a>
          </div>
        </CategoryGrid>
      </ItemCategoryWrap>
    </>
  );
};

export default ItemCategory;

const ItemCategoryWrap = styled.div`
  width: 60vw;
  margin: 30px 0 100px 0;
  @media screen and (max-width: 768px) {
    margin: 15px 0 50px 0;
  }

  h1 {
    color: black;
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 40px;
    @media screen and (max-width: 768px) {
      margin-bottom: 20px;
    }

    @media screen and (max-width: 1024px) {
      font-size: 1.6rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const CategoryGrid = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  grid-template-columns: repeat(3, minmax(10px, 1fr));
  place-items: center;
  text-align: center;

  #bread {
    width: 110px;
    height: 100px;
    margin-top: 15%;
    margin-bottom: 40px;
    @media screen and (max-width: 1024px) {
      width: 80px;
      height: 70px;
      margin-bottom: 47px;
    }
    @media screen and (max-width: 768px) {
      width: 50px;
      height: 40px;
      margin-bottom: 30px;
    }
  }
  #jam {
    width: 140px;
    height: 130px;
    margin-top: 1%;
    @media screen and (max-width: 1024px) {
      width: 110px;
      height: 100px;
      margin-bottom: 37px;
    }
    @media screen and (max-width: 768px) {
      width: 60px;
      height: 60px;
      margin-bottom: 20px;
    }
  }
  #cake {
    width: 110px;
    height: 90px;
    margin-top: 20%;
    margin-bottom: 40px;
    @media screen and (max-width: 1024px) {
      width: 90px;
      height: 70px;
      margin-bottom: 30px;
    }
    @media screen and (max-width: 768px) {
      width: 60px;
      height: 40px;
      margin-bottom: 25px;
    }
  }
  img {
    margin-bottom: 30px;
  }

  .content {
    width: 150px;
    height: 150px;
    background-color: #e9e9e9;
    border-radius: 50%;
    margin-bottom: 10px;
    text-align: center;
    &:hover {
      background-color: #fcdec7;
    }

    &:hover {
      background-color: #fac99c;
    }

    @media screen and (max-width: 1024px) {
      width: 130px;
      height: 130px;
    }
    @media screen and (max-width: 768px) {
      width: 70px;
      height: 70px;
    }
  }
  a {
    color: #404040;
    text-decoration: none;
    outline: none;
    font-weight: 600;
    @media screen and (max-width: 1024px) {
      font-size: 0.8rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 0.4rem;
    }
  }
  p {
  }
`;
