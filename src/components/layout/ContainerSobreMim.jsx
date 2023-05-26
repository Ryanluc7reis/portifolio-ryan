import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
`
const StyledChildren = styled.div`
  max-width: 650px;
  height: 100%;
  display: flex;
  margin-top: 50px;
  justify-content: center;
  @media (max-width: 842px) {
    width: 100%;
    height: 100%;
    text-align: center;
    flex-direction: column;
    margin: 0;
    padding: 50px 0;
  }
  @media (max-width: 375px) {
    width: 100%;
    height: auto;
    text-align: center;
    flex-direction: column;
    margin-bottom: 135px;
  }
`

function ContainerSobreMim({ children }) {
  return (
    <StyledContainer>
      <StyledChildren>{children}</StyledChildren>
    </StyledContainer>
  )
}

export default ContainerSobreMim
