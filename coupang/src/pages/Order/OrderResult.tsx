import React, { FC } from "react";
import { Link } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import bakepang from "../../assets/bakepang.png";
import styled from "styled-components";
import * as st from "../Cart/CartOrder.style";

const OrderResult: FC = () => {
  // URL 파라미터에서 success 값을 가져옴
  const urlSearchParams = new URLSearchParams(window.location.search);
  const isSuccess = urlSearchParams.get("success");
  return (
    <st.Wrap>
      <st.Logo>
        <Link to={"/"}>
          <img src={bakepang} alt="로고" />
        </Link>
      </st.Logo>
      <st.Container>
        <ExtendedHeaderWrap>
          <st.TitleWrap>
            <h2>주문완료</h2>
          </st.TitleWrap>
          <st.StepWrap>
            <div>
              <span>01</span>
              <p>장바구니</p>
            </div>
            <span>
              <MdArrowForwardIos color="#afafaf" />
            </span>
            <div>
              <span>02</span>
              <p>주문/결제</p>
            </div>
            <span>
              <MdArrowForwardIos color="#afafaf" />
            </span>
            <st.CurrentStep>
              <span>03</span>
              <p>주문완료</p>
            </st.CurrentStep>
          </st.StepWrap>
        </ExtendedHeaderWrap>
        <ResultWrap>
          {isSuccess === "true" ? (
            <p className="success">고객님의 상품 주문이 완료되었습니다.</p>
          ) : (
            <p className="failure">고객님의 주문을 완료할 수 없습니다.</p>
          )}
          <ExtendedButtonWrap>
            <Link to={"/"}>
              <st.Button bgcolor="blue">홈화면으로</st.Button>
            </Link>
          </ExtendedButtonWrap>
        </ResultWrap>
      </st.Container>
    </st.Wrap>
  );
};

export default OrderResult;

const ExtendedHeaderWrap = styled(st.HeaderWrap)`
  margin-bottom: 30px;
  border-bottom: 2px solid #2f2f2f;
`;

const ResultWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 100px 0;
  font-size: 1.5rem;
  font-weight: 700;
  .success {
    color: #4b4b4b;
  }
  .failure {
    color: #ff0000;
  }
`;

const ExtendedButtonWrap = styled(st.ButtonWrap)`
  padding: 80px 0 20px;
`;
