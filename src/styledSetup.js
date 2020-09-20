import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  font-family: Sans-serif;
}

body {
  background-color: #fff;
  box-sizing: border-box;
}

`;

export const theme = {
  colors: {
    colorGray: '#a8a8a8',
  },
  fontSizes: {
    fontXs: '0.8rem',
    fontSm: '1.2rem',
    fontMd: '1.6rem',
    fontLg: '2rem',
    fontXL: '3rem',
  },
};
