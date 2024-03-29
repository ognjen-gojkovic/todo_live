import { createGlobalStyle, css } from "styled-components";

const ResetCSS = css`
  // variables
  :root {
    --background: #1e075d;
    --border: #0f0038;
    --contentBg: #3400c3;
    --font: #eaee02;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`;

const BaseStyle = createGlobalStyle`
    ${ResetCSS}
`;

export const GlobalStyles = () => <BaseStyle />;
