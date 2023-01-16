import 'styled-components'
import { DefaultTheme, LightTheme } from '../styles/theme/default/default'

type ThemeTypeLight = typeof LightTheme
type ThemeTypeDefaultTheme = typeof DefaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTypeLight {}
}
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTypeDefaultTheme {}
}
