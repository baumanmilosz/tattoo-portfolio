import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*,*:before,*:after {
  box-sizing: inherit;
    margin: 0;
    padding: 0;
}

body {
  font-family: 'Montserrat', sans-serif;
  min-height: 100vh;
}

ul {
  list-style: none;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}
`;

export default GlobalStyle;
