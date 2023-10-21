import React, { FC, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { postOrder, getUserData } from "../../api/order";
import { MdArrowForwardIos } from "react-icons/md";
import bakepang from "../../assets/bakepang.png";
import BuyerInfo from "./BuyerInfo";
import ShipInfo from "./ShipInfo";
import OrderList from "./OrderList";
import Payment from "./Payment";
import { CartItemType } from "../../types/cart";
import { UserType } from "../../types/user";
import styled from "styled-components";
import * as st from "../Cart/CartOrder.style";

const Order: FC = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState<UserType | null>(null);
  const directOrderItem = useSelector((state: RootState) => state.cart.order);
  const [selectedItems, setSelectedItems] = useState<CartItemType[]>([]);
  const [totalOrderAmount, setTotalOrderAmount] = useState<number>(0);
  const [hasOrdered, setHasOrdered] = useState(false);

  useEffect(() => {
    getUserData()
      .then((res) => {
        setUserData(res);
      })
      .catch((error) => {
        console.error("사용자 정보를 불러오던 중 오류 발생", error);
      });
  }, []);

  useEffect(() => {
    if (directOrderItem.length > 0) {
      setSelectedItems(directOrderItem);
      const totalAmount = directOrderItem.reduce(
        (acc, item) => acc + item.amount * item.productPrice,
        0
      );
      setTotalOrderAmount(totalAmount);
    } else {
      const savedOrderItem = sessionStorage.getItem("directOrderItem");
      const savedSelectedItems = sessionStorage.getItem("selectedItems");
      const savedTotalOrderAmount = sessionStorage.getItem("totalOrderAmount");

      if (savedOrderItem) {
        const parsedOrderItem: CartItemType = JSON.parse(savedOrderItem);
        setSelectedItems([parsedOrderItem]);
        const totalAmount =
          parsedOrderItem.amount * parsedOrderItem.productPrice;
        setTotalOrderAmount(totalAmount);
      } else if (savedSelectedItems) {
        const parsedItems: CartItemType[] = JSON.parse(savedSelectedItems);
        setSelectedItems(parsedItems);
        if (savedTotalOrderAmount) {
          const parsedTotalOrderAmount = JSON.parse(savedTotalOrderAmount);
          setTotalOrderAmount(parsedTotalOrderAmount);
        }
      }
    }
  }, [directOrderItem]);

  const handlePayment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userData) {
      console.error("사용자 데이터가 없습니다.");
      return;
    }
    console.log("Ordering the following items:", selectedItems);
    postOrder(selectedItems.map((item) => item.cartProductId))
      .then((res) => {
        console.log(res, "주문 성공");
        navigate("/order/result?success=true");
      })
      .catch((error) => {
        console.error("주문 중 오류 발생", error);
        navigate("/order/result?success=false");
      });
    setHasOrdered(true);
    sessionStorage.clear();
  };

  useEffect(() => {
    return () => {
      if (!hasOrdered) {
        sessionStorage.removeItem("directOrderItem");
      }
    };
  }, [hasOrdered]);

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
            <h2>주문/결제</h2>
          </st.TitleWrap>
          <st.StepWrap>
            <div>
              <span>01</span>
              <p>장바구니</p>
            </div>
            <span>
              <MdArrowForwardIos color="#afafaf" />
            </span>
            <st.CurrentStep>
              <span>02</span>
              <p>주문/결제</p>
            </st.CurrentStep>
            <span>
              <MdArrowForwardIos color="#afafaf" />
            </span>
            <div>
              <span>03</span>
              <p>주문완료</p>
            </div>
          </st.StepWrap>
        </ExtendedHeaderWrap>
        <Form onSubmit={handlePayment}>
          {userData && (
            <div>
              <BuyerInfo userData={userData} />
              <ShipInfo userData={userData} />
              <OrderList selectedItems={selectedItems} />
              <Payment
                userData={userData}
                selectedItems={selectedItems}
                totalOrderAmount={totalOrderAmount}
              />
            </div>
          )}
          <AgreeBox>
            <input type="checkbox" required />
            <span>
              위 주문 내용을 확인하였으며, 회원 본인은 개인정보 이용 및
              제공(해외직구의 경우 국외제공) 및 결제에 동의합니다.
            </span>
          </AgreeBox>
          <st.ButtonWrap>
            <st.Button bgcolor="blue" type="submit">
              결제하기
            </st.Button>
          </st.ButtonWrap>
        </Form>
      </st.Container>
    </st.Wrap>
  );
};

export default Order;

const ExtendedHeaderWrap = styled(st.HeaderWrap)`
  margin-bottom: 30px;
  border-bottom: 2px solid #2f2f2f;
`;

const Form = styled.form`
  width: 100%;
`;

const AgreeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  span {
    font-size: 0.875rem;
  }
`;
