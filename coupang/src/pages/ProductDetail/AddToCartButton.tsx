import React from 'react';
import { AddToCartButtonStyled } from './AddToCartButton.styled';

type AddToCartButtonProps = {
  onClick: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onClick }) => {
  return (
    <AddToCartButtonStyled onClick={onClick}>
      장바구니 담기
    </AddToCartButtonStyled>
  );
}

export default AddToCartButton;
