import { createGlobalStyle } from 'styled-components'
import core from './core'
import cssVars from './cssVars'
import gutters from './gutters'
import typography from './typography'

export const GlobalStyles = createGlobalStyle`
    ${core}
    ${cssVars}
    ${gutters}
    ${typography}
`
