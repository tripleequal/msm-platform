import { HTMLAttributes } from 'react'
import styled from 'styled-components'

interface PageProps extends HTMLAttributes<HTMLDivElement> {
  headerText: string
  loading?: boolean
  rightContent?: JSX.Element
}

export default function Page({
  headerText,
  loading = false,
  rightContent,
  children,
}: PageProps) {
  return (
    <>
      <StyledHeader>
        {headerText} {!!rightContent && rightContent}
      </StyledHeader>
      {loading ? <div>loading...</div> : children}
    </>
  )
}

const StyledHeader = styled.h1`
  align-items: center;
  display: flex;
  justify-content: space-between;
`
