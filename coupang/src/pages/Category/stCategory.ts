import styled from "styled-components";

export const StCategory = styled.div`
  position: relative;
  .header {
    width: 70vw;
    margin: auto;
    display: flex;
    /* gap: 50px; */
    align-items: center;
    justify-content: center;

    /* padding-top: 25px; */
    z-index: 20;
    position: relative;
    /* margin-bottom: 30px; */
    @media screen and (max-width: 768px) {
      width: 90vw;
    }
  }
  a {
    text-decoration: none;
    outline: none;
    color: #000;
  }

  a:visited,
  a:active {
    color: #000;
  }
  .logo {
    margin-left: 20px;
    padding-right: 10px;
    width: 170px;
    height: 50px;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      width: 60px;
      height: 30px;
      margin-left: 5px;
      padding-right: 2px;
    }
  }
  main {
    width: 65vw;
    margin: auto;
    padding-top: 30px;
    padding-left: 160px;
    margin-bottom: 20px;
    @media screen and (max-width: 1024px) {
      width: 80vw;
    }
    @media screen and (max-width: 768px) {
      width: 70vw;
      padding-top: 20px;
      padding-left: 20px;
    }
  }
  .cate__title {
    font-size: large;
    font-weight: 600;
    @media screen and (max-width: 768px) {
      font-size: medium;
    }
  }
`;
