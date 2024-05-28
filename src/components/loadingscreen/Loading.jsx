import styled from 'styled-components'
const StyledFlex = styled.div`
  width: 100%;
  height: 100vh;
  background: #ffffff;
`

function Loading({ children }) {
  return <StyledFlex>{children}</StyledFlex>
}

export default Loading
