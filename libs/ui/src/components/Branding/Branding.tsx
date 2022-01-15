import styled from 'styled-components'

export function Branding() {
  return (
    <StyledBranding>
      Mid<span className="branding-text">School</span>Math
    </StyledBranding>
  )
}

const StyledBranding = styled.span`
  .branding-text {
    color: var(--branding-emphasis);
  }
`
