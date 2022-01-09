import { createGlobalStyle } from 'styled-components'
import cssVars from './cssVars'
import gutters from './gutters'
import typography from './typography'

export const GlobalStyles = createGlobalStyle`
    ${cssVars}
    ${gutters}
    ${typography}
`
