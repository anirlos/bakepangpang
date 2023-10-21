import styled from "styled-components";

export const StSearchBox = styled.div`
  position: relative;
  width: 800px;
  height: 40px;
  margin: 0 5px;
  border: 0.1rem solid #4285f4;
  @media screen and (max-width: 768px) {
    height: 30px;
  }
  .input {
    width: 90%;
    height: 90%;
    border: none;
    display: block;
    &:focus {
      outline: none;
    }
    font-size: 1rem;
    @media screen and (max-width: 768px) {
      font-size: 0.6rem;
      height: 80%;
    }
  }
  .search__icon {
    color: #4285f4;
    height: 100%;
    @media screen and (max-width: 768px) {
      width: 5%;
    }
  }
  .form {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
  }
`;
