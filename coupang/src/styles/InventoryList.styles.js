import styled from "styled-components";

export const StyledInventoryList = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    margin-bottom: 16px;
  }

  .select-container {
    position: absolute; 
    top: 130px; 
    right: 100px; 
    padding: 10px;
  }
  }


  table {
    border-collapse: collapse;
    width: 84.2%;
    margin: 10px 0; 
    padding: 20px;
    
  }

  th, td {
    background-color: #fff;
    border-bottom: 1px solid #ccc; 
    padding: 3px;
    border-radius: 4px;
    text-align: center;
  }

  .quantity {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .quantity-button {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .button {
    cursor: pointer;
  }
`;