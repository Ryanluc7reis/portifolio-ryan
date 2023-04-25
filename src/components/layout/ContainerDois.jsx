import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  margin-left: 70px;
`
const StyledChildren = styled.div`
  width: 100%;
  display: flex;
`

function ContainerDois({ children }) {
  return (
    <StyledContainer>
      <StyledChildren>{children}</StyledChildren>
    </StyledContainer>
  )
}

export default ContainerDois
