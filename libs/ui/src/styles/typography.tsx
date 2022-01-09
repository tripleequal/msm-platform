import { css } from 'styled-components'

export const fontSize = {
  body: '16px',
  h1: '80px',
}
export default css`
  body {
    font-size: ${fontSize.body};
  }
  h1,
  .h1 {
    font-size: ${fontSize.h1};
  }
`
