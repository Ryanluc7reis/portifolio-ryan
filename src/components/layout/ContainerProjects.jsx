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
    width: auto;
    gap: 30px;
    margin: 50px 0;
  }
  @media (min-width: 425px) {
    align-items: center;
    margin: 0 25px;
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
