import React from "react";
import styled from "styled-components";
import git from "../../assets/footerImg/GitHub-logo.png";
import notion from "../../assets/footerImg/Notion-logo.svg.png";

const Footer = () => {
  return (
    <footer>
      <FooterLayer_01>
        <FooterContent>
          <address>
            상호명 및 호스팅 서비스 제공 : 베이크팡(주)
            <br />
            대표이사 : 슈퍼코딩
            <br />
            통신판매업신고 : 2023-슈퍼코딩-1021
            <br />
            <a href="#">사업자정보 확인 &gt;</a>
          </address>
          <div className="contact-info">
            <a href="https://github.com/aareumii/coupang-project">
              <img id="git" src={git} />
            </a>
            <a href="https://alkaline-tamarillo-af0.notion.site/2-2beda882eb9c434ebd8022a0e21ad20c">
              <img id="notion" src={notion} />
            </a>
          </div>
        </FooterContent>
      </FooterLayer_01>
    </footer>
  );
};

export default Footer;

const FooterLayer_01 = styled.div`
  border-top: 1px solid #dddbdb;

  width: 99vw;
  height: 100px;
  margin: 200px auto 40px;
  font-size: 12px;
  color: #555;
  line-height: 150%;
  @media screen and (max-width: 768px) {
    font-size: 0.4rem;
  }
  h1 {
    a {
      background-position: -19px -34px;
      width: 117px;
      height: 34px;
    }
  }
`;

const FooterContent = styled.div`
  width: 60vw;
  margin: auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    width: 90vw;
  }

  a {
    text-decoration: none;
    color: #555;
    &:last-child {
    }
    strong {
      font-weight: bold;
    }
    em {
      font-size: 24px;
      font-family: Tahoma;
      font-weight: bold;
      display: block;
      margin: 9px 0 11px 0;
    }
  }
  img {
    width: 2rem;
  }
  #git {
    width: 4rem;
    margin-right: 10px;
  }
`;
