import styled from "styled-components";

const StyledRegisterForm = styled.div`
  background-color: #fff;
  border: 2px solid #ccc;
  padding: 20px;
  width: 80%;
  margin: 0 auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  label {
    font-weight: bold;
    margin-bottom: 8px;
  }

  input[name="product"],
  input[name="description"],
  input[name="price"],
  input[name="quantity"],
  input[name="registrationDate"],
  input[name="endDate"]{
    border: 1px solid #ccc;
    padding: 8px;
    margin-bottom: 16px;
  }

  .media-inputs {
    display: flex;
    border: 1px solid #ccc;
    padding: 8px;
    gap: 8px;
    margin-bottom: 16px;
  }

  .media-inputs input {
    flex-grow: 1;
    padding: 8px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
  }
`;

export { StyledRegisterForm, StyledForm };