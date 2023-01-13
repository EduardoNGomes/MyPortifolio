import { Header } from "./components/Header"

import { GlobalStyle } from "./styles/theme/global"

import { ThemeProvider } from "styled-components"
import { DefaultTheme } from "./styles/theme/default/default"
export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle/>
      <Header/>
    </ThemeProvider>
  )
}


