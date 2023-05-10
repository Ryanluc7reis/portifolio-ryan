import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
`
const StyledChildren = styled.div`
  font-size: 20px;
  margin-top: 10px;
  margin-right: 50px;
  display: flex;
  gap: 20px;

  @media (max-width: 615px) {
    display: flex;
    width: 100%;
  }
`

function ContainerSkils({ children }) {
  return (
    <StyledContainer>
      <StyledChildren>{children}</StyledChildren>
    </StyledContainer>
  )
}

export default ContainerSkils
