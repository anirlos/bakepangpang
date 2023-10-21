import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoutButton from "../../pages/LoginPage/LogoutButton";

const TopNav = () => {
  const handleLogout = () => {
    // 로그아웃 처리 로직을 구현합니다.
  };
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderNav>
          <p>즐겨찾기</p>
          <p>입점신청 ▼</p>
        </HeaderNav>
        <MembershipNav>
          {isLoggedIn() ? (
            <LogoutButton onLogout={handleLogout} />
          ) : (
            <>
              <p>
                <Link
                  to={"/"}
                  style={{ textDecoration: "none", color: " #000" }}
                >
                  홈
                </Link>
              </p>
              <p>
                <Link
                  to={"/login"}
                  style={{ textDecoration: "none", color: " #000" }}
                >
                  로그인
                </Link>
              </p>
              <p>
                <Link
                  to={"/signup"}
                  style={{ textDecoration: "none", color: " #000" }}
                >
                  회원가입
                </Link>
              </p>
            </>
          )}
          <p>고객센터</p>
        </MembershipNav>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
function isLoggedIn() {
  // 로그인 상태 확인 함수
  return !!localStorage.getItem("accessToken");
}

export default TopNav;

const HeaderWrapper = styled.div`
  width: 100%;
  /* margin: auto; */
  height: 2rem;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  border-bottom: 0.7px solid #d7d7d7;
`;

const HeaderNav = styled.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
  cursor: pointer;
  p {
    color: black;
    font-size: 0.6rem;
  }
`;

const MembershipNav = styled.div`
  display: flex;
  gap: 10px;
  align-items: baseline;
  cursor: pointer;
  p {
    color: black;
    font-size: 0.6rem;
  }
`;

const HeaderContainer = styled.div`
  width: 65vw;
  margin: auto;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`;
