import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}

  a {
    text-decoration: none;
    outline: none;
    color: #000;
  }

  a:visited, a:active{color: #000}
  html{
  scroll-behavior: smooth;
}
:root{--swiper-theme-color: #000000;}
`;
