//CartPage.tsx

import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios"; // AxiosError를 추가로 import 합니다.
import styled from "styled-components";

type CartItem = {
  productName: string;
  productPrice: number;
  totalPrice: number;
  amount: number;
};

type CartResponse = {
  userId: number;
  totalCount: number;
  totalPrice: number;
  productList: CartItem[];
};

const CartContainer = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const ItemList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Item = styled.li`
  padding: 10px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
`;

const ProductName = styled.span`
  font-weight: bold;
`;

const ProductPrice = styled.span`
  color: #555;
`;

const TotalPrice = styled.li`
  font-size: 1.2em;
  margin-top: 20px;
  border-top: 2px solid #eee;
  padding-top: 10px;
  color: #222;
  font-weight: bold;
`;

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const fetchCartItems = async () => {
      const storedToken = localStorage.getItem("token");
      console.log("Token from localStorage:", storedToken);

      if (!storedToken) {
        console.error("Token not found");
        return;
      }

      try {
        const response = await axios.get(
          "http://43.201.30.126:8080/api/users/carts",
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          }
        );

        console.log("Response Data:", response.data);

        if (response.data && Array.isArray(response.data.productList)) {
          // setCartItems(response.data.productList);
          const data = response.data as CartResponse;
          setCartItems(data.productList);
          setTotalPrice(data.totalPrice);

          // console.log(data.totalPrice);
        } else {
          console.error(
            "Expected 'productList' to be an array but received:",
            response.data
          );
        }

        const accessToken = response.headers["authorization"];
        if (accessToken && accessToken.startsWith("Bearer ")) {
          localStorage.setItem("token", accessToken.slice(7));
        }
      } catch (error) {
        console.error("Failed to fetch cart items", error);
        const axiosError = error as AxiosError;

        if (axiosError.isAxiosError && axiosError.response) {
          const responseData = axiosError.response.data as { message?: string };

          if (responseData.message === "토큰 시간이 만료되었습니다.") {
            // 토큰이 만료됐다는 응답을 받으면 로컬의 토큰을 삭제하고 로그인 페이지로 리다이렉트합니다.
            localStorage.removeItem("token");
            alert("세션이 만료되었습니다. 다시 로그인해주세요.");
            window.location.href = "/login";
          } else {
            console.error("Server Response:", responseData);
          }
        }
      }
    };

    fetchCartItems();
  }, []);

  return (
    <CartContainer>
      <Title>장바구니 목록</Title>
      {cartItems.length === 0 ? (
        <p>장바구니에 상품이 없습니다.</p>
      ) : (
        <ItemList>
          {cartItems.map((item, index) => (
            <Item key={index}>
              <ProductName>
                {item.productName} ({item.amount}개) {/* "count" 항목 표시 */}
              </ProductName>
              <ProductPrice>개당 : {item.productPrice}원</ProductPrice>
            </Item>
          ))}
          <TotalPrice>총 가격: {totalPrice}원</TotalPrice>
        </ItemList>
      )}
    </CartContainer>
  );
};

export default CartPage;
