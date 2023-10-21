import React, { FC, useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setItems,
  toggleSelectAll,
  deleteSelected,
  resetSelectedItems,
} from "../../redux/slice/cartSlice";
import { RootState } from "../../redux/store/store";
import { getCartItems, deleteCartItems } from "../../api/cart";
import { MdArrowForwardIos } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";
import bakepang from "../../assets/bakepang.png";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import CartErrorModal from "./CartErrorModal";
import styled from "styled-components";
import * as st from "./CartOrder.style";

const Cart: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const items = useSelector((state: RootState) => state.cart.items);
  const selectedItems = useSelector(
    (state: RootState) => state.cart.selectedItems
  );

  const isAllChecked = items?.every(
    (item) =>
      item.amount > item.stockQuantity ||
      selectedItems.some(
        (selectedItem) => selectedItem.productId === item.productId
      )
  );

  const totalOrderAmount = selectedItems.reduce(
    (acc, item) => acc + item.productPrice * item.amount,
    0
  );

  useEffect(() => {
    dispatch(resetSelectedItems());
    getCartItems()
      .then((data) => {
        dispatch(setItems(data.productList));
      })
      .catch((error) => {
        console.error("장바구니 상품 가져오는 중 오류발생", error);
      });
  }, [dispatch]);

  const handleSelectAll = useCallback(() => {
    dispatch(toggleSelectAll());
  }, [dispatch]);

  const handleDeleteSelected = async () => {
    const cartProductIds = selectedItems.map((item) => item.cartProductId);
    try {
      await deleteCartItems({ cartProductIdList: cartProductIds });
      dispatch(deleteSelected());
      console.log("상품 삭제 성공");
    } catch (error) {
      console.error("상품 삭제 중 오류발생:", error);
    }
  };

  const handleBuyButtonClick = useCallback(() => {
    if (selectedItems.length === 0) {
      setModalMessage("상품을 선택해주세요.");
      setShowModal(true);
    } else {
      navigate("/order");
    }
  }, [navigate, selectedItems.length]);

  return (
    <st.Wrap>
      <st.Logo>
        <Link to={"/"}>
          <img src={bakepang} alt="로고" />
        </Link>
      </st.Logo>
      <st.Container>
        <st.HeaderWrap>
          <ExtendedTitleWrap>
            <TiShoppingCart className="cart-icon" />
            <h2>장바구니</h2>
          </ExtendedTitleWrap>
          <st.StepWrap>
            <st.CurrentStep>
              <span>01</span>
              <p>장바구니</p>
            </st.CurrentStep>
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
            <div>
              <span>03</span>
              <p>주문완료</p>
            </div>
          </st.StepWrap>
        </st.HeaderWrap>

        {items && items.length === 0 ? (
          // 장바구니 상품 개수가 0인 경우
          <EmptyCart />
        ) : (
          <>
            <TableWrap>
              <CartAmount>
                {items !== null && (
                  <p>장바구니에 담긴 상품 &#40; {items.length} &#41;</p>
                )}
              </CartAmount>
              <CartItemTable>
                <colgroup>
                  <col width="1%" />
                  <col width="10%" />
                  <col width="55%" />
                  <col width="10%" />
                  <col width="4%" />
                  <col width="15%" />
                </colgroup>
                <thead>
                  <tr>
                    <th colSpan={2} className="allcheck-input">
                      <input
                        type="checkbox"
                        className="allcheck"
                        onChange={handleSelectAll}
                        checked={isAllChecked}
                      />
                      <span>전체선택</span>
                    </th>
                    <th colSpan={3}>상품정보</th>
                    <th>상품금액</th>
                  </tr>
                </thead>
                <tbody>
                  {items?.map((item) => (
                    <CartItem key={item.cartProductId} item={item} />
                  ))}
                </tbody>
              </CartItemTable>
            </TableWrap>
            <SelectWrap>
              <input
                type="checkbox"
                className="allcheck"
                onChange={handleSelectAll}
                checked={isAllChecked}
              />
              <p>전체선택</p>
              <button onClick={handleDeleteSelected}>선택삭제</button>
            </SelectWrap>
            <PriceWrap>
              <TotalSumPriceWrap>
                <p>총 주문금액</p>
                <SumPrice>{totalOrderAmount}</SumPrice>
                <p>원</p>
              </TotalSumPriceWrap>
            </PriceWrap>
            <st.ButtonWrap>
              <Link to={"/"}>
                <ExtendedButton bgcolor="white">계속 쇼핑하기</ExtendedButton>
              </Link>
              <ExtendedButton bgcolor="blue" onClick={handleBuyButtonClick}>
                구매하기
              </ExtendedButton>
            </st.ButtonWrap>
            {showModal && (
              <CartErrorModal
                message={modalMessage}
                onClose={() => setShowModal(false)}
              />
            )}
          </>
        )}
      </st.Container>
    </st.Wrap>
  );
};

export default Cart;

const ExtendedTitleWrap = styled(st.TitleWrap)`
  letter-spacing: -2px;
  .cart-icon {
    font-size: 1.85rem;
    color: #656565;
    margin-right: 5px;
  }
`;

const TableWrap = styled.div`
  background: #fafafa;
`;

const CartAmount = styled.div`
  width: 100%;
  background-color: #eaeaea;
  padding: 30px 0;
  margin-bottom: 10px;
  text-align: center;
  p {
    font-weight: 700;
    font-size: 1rem;
    color: #55575f;
  }
`;

const CartItemTable = styled.table`
  width: 100%;
  text-align: center;
  thead {
    height: 40px;
    line-height: 40px;
    font-size: 0.875rem;
    color: #111111;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    .allcheck-input {
      text-align: left;
      padding-left: 10px;
      input {
        margin-right: 10px;
      }
    }
  }
  tbody {
    background-color: #fff;
    tr {
      border-top: 1px solid #eaeaea;
      border-bottom: 1px solid #eaeaea;
      td {
        vertical-align: middle;
        padding: 10px;
        img {
          width: 75px;
          height: 75px;
          padding: 5px;
          text-align: center;
          vertical-align: center;
        }
      }
    }
  }
`;

const SelectWrap = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  margin-top: 20px;
  p {
    margin-left: 10px;
    font-size: 0.8125rem;
    cursor: pointer;
  }
  button {
    display: inline-block;
    margin-left: 10px;
    padding: 4px 5px;
    border: 1px solid #ccc;
    text-align: center;
    font-size: 0.75rem;
    color: #111;
    font-weight: 500;
    background-color: #fff;
    cursor: pointer;
  }
`;

const PriceWrap = styled.div`
  width: 100%;
  margin: 30px 0;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid #c8c8c8;
  text-align: center;
`;

const TotalSumPriceWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  p {
    font-size: 0.875rem;
    line-height: 17px;
    color: #555;
    text-align: center;
  }
`;

const SumPrice = styled.div`
  padding: 0 4px 0 5px;
  font: 700 20px/20px tahoma;
  color: #ea0000;
  margin-left: 10px;
`;

const ExtendedButton = styled(st.Button)`
  margin: 10px;
`;
