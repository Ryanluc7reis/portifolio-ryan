import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
`
const StyledChildren = styled.div`
  width: 100%;
  max-width: 600px;
  margin-left: 200px;
  margin-top: 50px;
`

function ContainerSkils({ children }) {
  return (
    <StyledContainer>
      <StyledChildren>{children}</StyledChildren>
    </StyledContainer>
  )
}

export default ContainerSkils
