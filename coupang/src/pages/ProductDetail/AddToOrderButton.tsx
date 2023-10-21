import React from 'react';
import { AddToOrderButtonStyled } from './AddToOrderButton.styled';

type AddToOrderButtonProps = {
  onClick: () => void;
}

const AddToCartButton: React.FC<AddToOrderButtonProps> = ({ onClick }) => {
  return (
    <AddToOrderButtonStyled onClick={onClick}>
      구매하기
    </AddToOrderButtonStyled>
  );
}

export default AddToCartButton;
