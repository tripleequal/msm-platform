// import { Theme } from '@mui/material'

/* 
  styled-component docs recommend putting this declaration in a .d.ts declarations file. But
  That wasn't working for me. I couldn't figure out why. It works just fine when I put it here, though.
  This gives us typing support for material themes inside styled-components
*/
// declare module 'styled-components' {
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface
//   export interface DefaultTheme extends Theme {}
// }

export * from './adminTheme'
export * from './defaultTheme'
