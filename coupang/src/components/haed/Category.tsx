import React from "react";
import styled from "styled-components";
import menuBar from "../../assets/headerImg/menuBar.svg";
import bread from "../../assets/headerImg/bread1.png";
import jam from "../../assets/headerImg/jam.png";
import cake from "../../assets/headerImg/Cake.png";
import market from "../../assets/headerImg/market.png";

const Category = () => {
  return (
    <CategoryWrap>
      <CategoryBox>
        <CategoryBtn>
          <img src={menuBar} />
          <p>카테고리</p>
        </CategoryBtn>
        <CategoryModalWarp className="categoryWarp">
          <CategoryModal>
            <Contents>
              <li>
                <img src={market} />
                <a href="/">전체보기</a>
              </li>
              <li>
                <img src={bread} />
                <a href="/Bread">식빵·빵류</a>
              </li>
              <li>
                <img src={jam} />
                <a href="/Jam">잼·버터·스프레드</a>
              </li>
              <li>
                <img src={cake} />
                <a href="/Cake">케이크·파이·디저트</a>
              </li>
            </Contents>
          </CategoryModal>
        </CategoryModalWarp>
      </CategoryBox>
    </CategoryWrap>
  );
};

export default Category;

// const CategoryWarrper = styled.div`
//   width: 72vw;
//   margin: auto;
// `;

const CategoryWrap = styled.div`
  /* align-self: flex-start; */

  /* position: fixed; */

  top: 30px;
  z-index: 1;
  &:hover {
    .categoryWarp {
      display: block;
    }
  }
`;

const CategoryBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: #4285f4;
  position: relative;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin: 5px 0;
    border-radius: 16px;
  }
`;

const CategoryBtn = styled.div`
  position: absolute;
  top: 27%;
  left: 27%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > img {
    width: 35px;
    height: 35px;
    padding-left: 3px;
    margin-bottom: 8px;

    align-items: center;
    @media screen and (max-width: 768px) {
      width: 20px;
      height: 20px;
      padding-left: 0;
    }
  }
  > p {
    color: white;
    font-size: 0.68rem;
    text-align: center;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const CategoryModalWarp = styled.div`
  display: none;
  position: absolute;

  top: 100%;
  left: 0%;
`;

const CategoryModal = styled.div`
  position: fixed;
  background-color: #ffffffef;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

const Contents = styled.ul`
  /* position: fixed;
	z-index: 10001;
	top: -10%;
	left: 10%; */
  width: 124px;

  border-radius: 3%;
  padding: 20px;
  li {
    list-style: none;
    opacity: 0.8;
    margin-bottom: 5px;
    text-align: left;
    img {
      width: 15px;
      margin-bottom: -4px;
    }
    a {
      text-decoration: none;
      color: #545353;
      font-size: 12px;
      margin-left: 6px;
      margin-bottom: 20px;
    }
    &:hover {
      transition: 0;
      text-decoration: underline;
      font-weight: bold;
      opacity: 1;
    }
  }
`;
