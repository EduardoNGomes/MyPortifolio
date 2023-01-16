import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto Mono', monospace;
}

body {
  background: ${(props) => props.theme.background};
}

li {
  list-style: none;
}

button {
  cursor: pointer;
}

button, li, a , span{
  font-family: 'Roboto Mono', monospace;
}
`
