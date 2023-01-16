import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}

body {
  background: ${props => props.theme.background};
}

li {
  list-style: none;
}

button {
  cursor: pointer;
}
`