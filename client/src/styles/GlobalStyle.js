import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --green: #0A6807;
    --lavender: #BBBAC6;
    --grey: #9B97B2;
    --white: #f8f8f8;
  }

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    height: 100vh;
  }
`;

export default GlobalStyle;
