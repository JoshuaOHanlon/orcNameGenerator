import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --green: #0A6807;
    --darkBlue: #011936;
    --blue: #85BAA1;
    --lightBlue: #A9DDD6;
    --white: #f8f8f8;
    --grey: #465362;
    --pink: #AD7A99;
    --peach: #EFB0B4;
  }

  body {
    height: 100vh;
  }
`;

export default GlobalStyle;
