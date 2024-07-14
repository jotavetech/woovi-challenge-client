import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body {
  font-family: "Nunito", sans-serif;
  font-size: 16px;
}

b {
  font-weight: 800;
}

a {
  text-decoration: none;
  color: inherit;
}

ul, ol {
    list-style: none;
}

h1, h2, h3, h4, h5,h6, a, ul, li, span, p {
  color: ${(props) => props.theme.colors.primary};
}

h1 {
  font-size: ${(props) => props.theme.fontSizes.xl};
}
`;
