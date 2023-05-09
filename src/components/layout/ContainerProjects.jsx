import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
`
const StyledChildren = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 70px;
  margin-right: 50px;
  @media (max-width: 915px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 400px;
    gap: 30px;
  }
`

function ContainerProjects({ children }) {
  return (
    <StyledContainer>
      <StyledChildren>{children}</StyledChildren>
    </StyledContainer>
  )
}

export default ContainerProjects
