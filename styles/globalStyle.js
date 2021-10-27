import { createGlobalStyle } from "styled-components";
import { grey } from "./utils";

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
