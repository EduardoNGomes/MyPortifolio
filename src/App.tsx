import { GlobalStyle } from './styles/theme/global'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme, LightTheme } from './styles/theme/default/default'

import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes/index'

import { FaMoon, FaSun } from 'react-icons/fa'
import { useState } from 'react'

export function App() {
  const [isLightTheme, setIsLightTheme] = useState(false)
  return (
    <ThemeProvider theme={isLightTheme ? LightTheme : DefaultTheme}>
      <BrowserRouter>
        <button
          onClick={() => setIsLightTheme(!isLightTheme)}
          id="theme-button"
        >
          {isLightTheme ? (
            <FaSun size={32} color="#48A1F0" />
          ) : (
            <FaMoon size={32} color="#48A1F0" />
          )}
        </button>
        <GlobalStyle />
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
