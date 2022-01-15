import { css } from 'styled-components'

const BASE_GUTTER = 4
const MULTIPLIERS = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => n * BASE_GUTTER)

function generateGutterCSSVars() {
  return MULTIPLIERS.map((size, i) => `--gutter-${i}: ${size}px;`).join('\n')
  // return `
  //   :root {
  //       ${() => {
  //         return MULTIPLIERS.map((size, i) => `--gutter-${i}: ${size}px;`).join(
  //           '\n'
  //         )
  //       }}
  //     }
  //   `
}

function generateGutterClass(prefix: string, rules: string[]) {
  let cssString = ''

  MULTIPLIERS.forEach((_size, i) => {
    cssString += `
        .${prefix}-${i} {
            ${rules.map((rule) => `${rule}: var(--gutter-${i});`).join('\n')}
        }
    `
  })

  cssString += `
      .${prefix}-auto {
          ${rules.map((rule) => `${rule}: auto;`).join('\n')}
      }
  `

  return cssString
}

export default css`
  :root {
    ${generateGutterCSSVars()}
  }
  ${generateGutterClass('pt', ['padding-top'])}
  ${generateGutterClass('pr', ['padding-right'])}
  ${generateGutterClass('pb', ['padding-bottom'])}
  ${generateGutterClass('pl', ['padding-left'])}
  ${generateGutterClass('px', ['padding-left', 'padding-right'])}
  ${generateGutterClass('py', ['padding-top', 'padding-bottom'])}
  ${generateGutterClass('p', ['padding'])}

  ${generateGutterClass('mt', ['margin-top'])}
  ${generateGutterClass('mr', ['margin-right'])}
  ${generateGutterClass('mb', ['margin-bottom'])}
  ${generateGutterClass('ml', ['margin-left'])}
  ${generateGutterClass('mx', ['margin-left', 'margin-right'])}
  ${generateGutterClass('my', ['margin-top', 'margin-bottom'])}
  ${generateGutterClass('m', ['margin'])}
`
