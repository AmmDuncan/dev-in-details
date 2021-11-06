import { createGlobalStyle } from "styled-components";
import { fontSize, grey } from "./utils";

export default createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  
  html, body {
    padding: 0;
    margin: 0;
    font-family: "Inter", "Segoe UI", Helvetica, sans-serif;
    color: ${grey(900)};
  }
  
  body {
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4 {
    font-family: "Overpass", "Segoe UI", Helvetica, sans-serif;
    line-height: 1;
    letter-spacing: calc(1em * -0.04);
  }
  
  h3 {
    font-size: ${fontSize("heading3")};
    font-size: min(${fontSize("heading3")}, max(6vw, 24px));
    line-height: 1.2;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
