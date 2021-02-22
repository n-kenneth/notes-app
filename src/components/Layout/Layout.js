import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Roboto";
  }
  body {
    font-family: "Roboto";
    font-size: 14px;
  }
  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

const Container = styled.main`
  max-width: 860px;
  margin: 64px auto;
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Container>{children}</Container>
  </>
);

export default Layout;
