import {createGlobalStyle} from 'styled-components';

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
  padding: 25px 60px 0;
  font-family: 'Montserrat';
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}
`

export default GlobalStyle;
