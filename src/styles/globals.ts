import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --black-700:#121212;
  --black-500: #141414;
  --white: #f0f0f0; 
  --green: #036935;
}

@media(max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}
@media(max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body {
  background: var(--black-500);
  color: var(--white);
}

body, button, p, span {
  font:400 1rem 'Open Sans', sans-serif;
}

ul {
  list-style: none;
}

`;

export default GlobalStyle;
