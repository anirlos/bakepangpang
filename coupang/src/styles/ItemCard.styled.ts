import styled from "styled-components";

export const StItemContent = styled.div`
  width: 18rem;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 10px;
  margin-top: 20px;
  height: 350px;
  padding-top: 10px;
  @media screen and (max-width: 1024px) {
    width: 12rem;
    height: 250px;
  }

  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  @media screen and (max-width: 768px) {
    width: 8rem;
    height: 150px;
  }
  .item {
    @media screen and (max-width: 768px) {
      font-size: 0.1rem;
    }
    padding: 0 10px;
    .itme__contents {
      padding-left: 7%;
      padding-right: 7%;
      display: flex;
      flex-direction: column;
      margin-top: 10px;
    }
    span {
      margin: 10px 10px;
    }
    .item__img {
      text-align: center;
      img {
        margin: 5px 0;
        width: 85%;
        height: 220px;
        @media screen and (max-width: 1024px) {
          height: 150px;
        }
        @media screen and (max-width: 768px) {
          height: 70px;
        }
      }
    }
    a {
      text-decoration: none;
      outline: none;
    }

    a:visited,
    a:active {
      color: #000;
    }

    p {
      font-size: 0.8rem;

      color: green;
      @media screen and (max-width: 768px) {
        font-size: 0.6rem;
      }
    }

    .item__name {
      font-size: 0.8rem;

      @media screen and (max-width: 768px) {
        font-size: 0.6rem;
      }
    }
    .item__price {
      font-size: 1rem;
      margin: 5px 0px;
      color: #a90000;
      font-weight: bold;

      @media screen and (max-width: 1024px) {
        font-size: 0.8rem;
      }
      @media screen and (max-width: 768px) {
        font-size: 0.6rem;
      }
    }
    .star {
      display: flex;
      align-items: center;
      font-size: 0.6rem;
      color: grey;
    }
    .star__png {
      width: 70px;
      padding-top: 2px;
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 768px) {
        width: 40px;
      }
    }
    .png__rocket {
      padding-right: 43%;
      width: 60px;
      @media screen and (max-width: 1024px) {
        padding-right: 10%;
      }
      @media screen and (max-width: 768px) {
        padding-right: 10%;
        width: 40px;
      }
    }
    .item__flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
