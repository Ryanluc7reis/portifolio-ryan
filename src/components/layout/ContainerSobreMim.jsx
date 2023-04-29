import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
`
const StyledChildren = styled.div`
  max-width: 650px;
  height: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`

function ContainerSobreMim({ children }) {
  return (
    <StyledContainer>
      <StyledChildren>{children}</StyledChildren>
    </StyledContainer>
  )
}

export default ContainerSobreMim
