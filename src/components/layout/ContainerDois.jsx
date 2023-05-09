import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
`
const StyledChildren = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: start;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`

function ContainerDois({ children }) {
  return (
    <StyledContainer>
      <StyledChildren>{children}</StyledChildren>
    </StyledContainer>
  )
}

export default ContainerDois
