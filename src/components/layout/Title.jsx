import { forwardRef } from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-size: 40px;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.title};
`
const StyledChildren = styled.div`
  margin-top: 70px;
`

const Title = forwardRef(({ children, ref, ...props }) => {
  return (
    <StyledTitle ref={ref}>
      <StyledChildren {...props}>{children}</StyledChildren>
    </StyledTitle>
  )
})
Title.displayName = 'Title'

export default Title
