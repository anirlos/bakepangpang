import React, { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  toggleSelectItem,
  deleteItem,
  updateItemAmount,
} from "../../redux/slice/cartSlice";
import { RootState } from "../../redux/store/store";
import { deleteCartItems, changeCartItems } from "../../api/cart";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { CartItemType } from "../../types/cart";

type CartItemProps = {
  item: CartItemType;
};

const CartItem: FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const isSoldOut = item.amount > item.stockQuantity;
  const isSelected = useSelector((state: RootState) =>
    state.cart.selectedItems.some(
      (selectedItem) => selectedItem.productId === item.productId
    )
  );

  const handleItemSelect = useCallback(() => {
    dispatch(toggleSelectItem(item));
  }, [dispatch, item]);

  const handleDelete = async (itemId: number) => {
    try {
      await deleteCartItems({ cartProductIdList: [item.cartProductId] });
      console.log("상품 삭제 성공");
      dispatch(deleteItem(itemId));
    } catch (error) {
      console.error("상품 삭제 중 오류 발생", error);
    }
  };

  const handleAmountChange = async (changeType: "increment" | "decrement") => {
    const updatedAmount =
      changeType === "increment" ? item.amount + 1 : item.amount - 1;
    if (updatedAmount === 0) {
      handleDelete(item.productId);
      return;
    }
    try {
      const payload = {
        cartProductId: item.cartProductId,
        amount: updatedAmount,
      };
      await changeCartItems(payload);
      dispatch(updateItemAmount(payload));
    } catch (error) {
      console.error("상품 수량 변경 중 오류 발생", error);
    }
  };

  return (
    <>
      <tr>
        <td rowSpan={2}>
          <input
            type="checkbox"
            className="check"
            onChange={handleItemSelect}
            checked={isSelected}
            disabled={isSoldOut}
          />
        </td>
        <td rowSpan={2}>
          <ProductImg src={item.productImage} alt="임시 이미지" />
        </td>
        <ProductInfo colSpan={3}>{item.productName}</ProductInfo>
        <PriceInfo rowSpan={2}>
          {isSoldOut ? (
            <SoldOutText>품절</SoldOutText>
          ) : (
            `${item.productPrice * item.amount}원`
          )}
        </PriceInfo>
      </tr>
      <tr>
        <ProductInfo>{item.productPrice}원</ProductInfo>
        <td>
          <AmountBox>
            <button onClick={() => handleAmountChange("increment")}>
              <MdKeyboardArrowUp />
            </button>
            <input type="number" value={item.amount} readOnly />
            <button onClick={() => handleAmountChange("decrement")}>
              <MdKeyboardArrowDown />
            </button>
          </AmountBox>
        </td>
        <td>
          <DeleteButton onClick={() => handleDelete(item.productId)}>
            X
          </DeleteButton>
        </td>
      </tr>
    </>
  );
};

export default CartItem;

const SoldOutText = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #ff0000;
`;

const ProductImg = styled.img`
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
`;

const ProductInfo = styled.td`
  text-align: left;
  font-size: 0.875rem;
`;

const PriceInfo = styled.td`
  text-align: center;
  font-size: 0.875rem;
`;

const AmountBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #767676;
  &:hover {
    button {
      opacity: 1;
    }
  }
  button {
    font-size: 1.25rem;
    border: none;
    background-color: transparent;
    transform: translateY(2px);
    padding: 0;
    cursor: pointer;
    opacity: 0;
  }
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input {
    width: 30px;
    border: none;
    font-size: 1rem;
    text-align: center;
    outline: none;
  }
`;

const DeleteButton = styled.button`
  width: 25px;
  height: 25px;
  background-color: transparent;
  border: 1px solid #a6a6a6;
  font-size: 1rem;
  color: #a6a6a6;
  cursor: pointer;
`;
