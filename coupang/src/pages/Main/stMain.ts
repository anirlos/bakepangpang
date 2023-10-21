import styled from "styled-components";

export const StMain = styled.div`
  position: relative;
  /* overflow-x: hidden;
  overflow-y: hidden; */

  .header {
    width: 75vw;
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
  .main {
    width: 60vw;
    margin: auto;
    padding-top: 40px;
    padding-left: 160px;
    @media screen and (max-width: 1024px) {
      width: 70vw;
    }
    @media screen and (max-width: 768px) {
      width: 70vw;
      padding-top: 20px;
      padding-left: 30px;
    }
  }
`;
