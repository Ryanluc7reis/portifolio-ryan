import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-size: 40px;
  display: flex;
  justify-content: center;
  color: blue;
`
const StyledChildren = styled.div`
  margin-top: 70px;
`

function Title({ children }) {
  return (
    <StyledTitle>
      <StyledChildren>{children}</StyledChildren>
    </StyledTitle>
  )
}
export default Title
