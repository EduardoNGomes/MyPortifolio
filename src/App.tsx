import { GlobalStyle } from './styles/theme/global'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/theme/default/default'

import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes/index'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
