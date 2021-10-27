import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: "Inter", "Segoe UI", Helvetica, sans-serif;
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

export const Container = styled.section`
  width: 90%;
  max-width: 1200px;
  margin: auto;
`;
