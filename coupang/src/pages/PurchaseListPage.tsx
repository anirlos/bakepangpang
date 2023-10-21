//PurchaseListPage.tsx

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios"; // axios 라이브러리를 추가해야합니다.

// const SalesListContainer = styled.div`
//   width: 100%;
//   padding: 1rem;
//   background-color: #f4f4f4;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// `;

// const SalesItem = styled.div`
//   background-color: #fff;
//   padding: 1rem;
//   margin-bottom: 1rem;

//   display: flex;
//   align-items: center;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const SalesItemImage = styled.img`
//   width: 60px;
//   height: 60px;
//   object-fit: cover;
//   margin-right: 1rem;
//   border-radius: 5px;
// `;

// const SalesItemInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1;
// `;

// const SalesItemName = styled.span`
//   font-weight: bold;
//   margin-bottom: 0.5rem;
// `;

// const SalesItemPrice = styled.span`
//   color: #e74c3c;
// `;

// const SalesListTitle = styled.h3`
//   margin: 0; /* 기본 마진 제거 */
//   margin-bottom: 1rem;
// `;

const PurchaseListContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: #f4f4f4;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const PurchaseItem = styled.div`
  background-color: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PurchaseItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const PurchaseItemName = styled.span`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const PurchaseItemPrice = styled.span`
  color: #e74c3c;
`;

const PurchaseListTitle = styled.h3`
  margin: 0; /* 기본 마진 제거 */
  margin-bottom: 1rem;
`;

interface OrderType {
  productName: string;
  productPrice: number;
  count: number;
  totalPrice: number;
}

interface PurchaseDataType {
  name: string;
  price: string;
  count: number;
}

const PurchaseListPage: React.FC = () => {
  const [purchaseData, setPurchaseData] = useState<PurchaseDataType[]>([]); // useState의 초기 상태와 타입을 명시적으로 설정합니다.

  useEffect(() => {
    const fetchPurchaseData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("토큰이 없습니다.");
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(
          "http://43.201.30.126:8080/api/user/myPage/userInfo",
          config
        );
        const orderList: OrderType[] = response.data.orderList;

        const data = orderList.map((order: OrderType) => ({
          name: order.productName,
          price: `${order.totalPrice}원`,
          count: order.count, // "count" 항목 추가
        }));
        setPurchaseData(data);
      } catch (error) {
        console.error("데이터를 가져오는 데 실패했습니다:", error);
      }
    };

    fetchPurchaseData();
  }, []);

  return (
    <PurchaseListContainer>
      <PurchaseListTitle>구매 목록 리스트</PurchaseListTitle>
      {purchaseData.map((item, index) => (
        <PurchaseItem key={index}>
          <PurchaseItemInfo>
            <PurchaseItemName>
              {item.name} ({item.count}개)
            </PurchaseItemName>{" "}
            {/* "count" 항목 표시 */}
            <PurchaseItemPrice>{item.price}</PurchaseItemPrice>
          </PurchaseItemInfo>
        </PurchaseItem>
      ))}
    </PurchaseListContainer>
  );
};

export default PurchaseListPage;
