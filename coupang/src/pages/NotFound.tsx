//NotFound.tsx

import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  // gap: 5px;
`;

const StyledButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: #0077b6;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005694;
  }
`;

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // 이전 페이지로 돌아가는 함수
  };

  return (
    <CenteredContainer>
      <h3>잘못된 접근입니다.</h3>
      <StyledButton onClick={handleGoBack}>뒤로가기</StyledButton>
    </CenteredContainer>
  );
};

export default NotFound;
