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
  transition: .3s all ease-in-out;
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

#theme-button{
  position: absolute;
  top: 4%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: transparent;
  border: none
}
`
