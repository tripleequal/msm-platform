import styled from 'styled-components'

/* eslint-disable-next-line */
export interface PortfolioProps {}

const StyledPortfolio = styled.div`
  color: pink;
`

export function Portfolio(props: PortfolioProps) {
  return (
    <StyledPortfolio>
      <h1>Welcome to Portfolio!</h1>
    </StyledPortfolio>
  )
}

export default Portfolio
