//PaymentManagement.tsx

import React, { useState } from "react";
import styled from "styled-components";

const StyledPaymentManagement = styled.div`
  margin-top: 1rem;
  background-color: #2196f3;
  padding: 0rem 1.5rem;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 5px;
`;

const BalanceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   flex-direction: column;
  align-items: center;
  gap: 35rem;
`;

const BalanceLabel = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const BalanceAmount = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 20px 0;
  margin: 0;

  .large-number {
    font-size: 3rem;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
  display: flex;
`;

const ChargeButton = styled.button`
  background-color: #007bc7;
  color: white;
  padding: 1rem 4rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0.5rem;
  font-size: 20px;
`;

const WithdrawButton = styled.button`
  background-color: #007bc7;
  color: white;
  padding: 1rem 4rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0.5rem;
  font-size: 20px;
`;

const HistoryButton = styled.button`
  background-color: white;
  color: #2196f3;
  padding: 1rem 4rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0.5rem;
  font-size: 20px;
`;

const PaymentManagement: React.FC = () => {
  const [balance, setBalance] = useState(0); // 초기값은 예시로 0으로 설정

  const showComingSoonAlert = () => {
    window.alert("준비 중 입니다.");
  };

  // 충전하기 버튼 클릭 핸들러
  const handleCharge = () => {
    showComingSoonAlert();
    // 충전 로직을 여기에 추가
    // 예를 들어, API 호출 또는 잔액 업데이트를 수행가능
    // 잔액 업데이트가 성공적으로 이루어지면 setBalance를 사용하여 상태를 업데이트
    // setBalance(newBalance); // 새로운 잔액으로 업데이트
  };

  // 인출하기 버튼 클릭 핸들러
  const handleWithdraw = () => {
    showComingSoonAlert();
    // 인출 로직을 여기에 추가
    // 예를 들어, API 호출 또는 잔액 업데이트를 수행가능
    // 잔액 업데이트가 성공적으로 이루어지면 setBalance를 사용하여 상태를 업데이트
    // setBalance(newBalance); // 새로운 잔액으로 업데이트
  };

  return (
    <StyledPaymentManagement>
      <BalanceContainer>
        <BalanceLabel>Bake머니 잔액</BalanceLabel>
        <BalanceAmount>
          <span className="large-number">{balance}</span>원
        </BalanceAmount>
      </BalanceContainer>
      <ButtonContainer>
        <HistoryButton onClick={showComingSoonAlert}>
          머니 사용 내역
        </HistoryButton>
        <ChargeButton onClick={handleCharge}>충전하기</ChargeButton>
        <WithdrawButton onClick={handleWithdraw}>인출하기</WithdrawButton>
      </ButtonContainer>
    </StyledPaymentManagement>
  );
};

export default PaymentManagement;
