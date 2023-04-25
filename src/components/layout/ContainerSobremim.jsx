import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
`
const StyledChildren = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 50px;
`

function ContainerSobremim({ children }) {
  return (
    <StyledContainer>
      <StyledChildren>{children}</StyledChildren>
    </StyledContainer>
  )
}

export default ContainerSobremim
