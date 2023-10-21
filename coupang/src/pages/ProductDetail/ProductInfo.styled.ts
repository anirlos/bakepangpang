import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  gap: 2rem;
`;

export const ProductInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const ProductImage = styled.img`
  width: 310px;
  height: 310px;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const ProductTextWapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  border-bottom: 1px solid #DFDFDF; 
  margin-bottom: 1rem;
  width: 100%;
`;

export const ProductName = styled.h2`
  margin-bottom: 10px;
`;

export const ProductPrice = styled.span`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 20px;
  `;


export const QuantityCounter = styled.div`
  display: flex;
  justify-content: center;
	align-items: center;   
  margin-bottom: 20px;
  border: 1px solid #83929A;

  & > button {
    padding: 5px 10px;
    background-color: #ffffff;
    border: 1px solid #EBEBEB;
  }

  & > span {
    padding: 0 10px;
    background-color: #ffffff;
    border: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
