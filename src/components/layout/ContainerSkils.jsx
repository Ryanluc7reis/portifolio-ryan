import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
`
const StyledChildren = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  margin-right: 50px;
  display: flex;
  justify-content: end;
  gap: 20px;
`

function ContainerSkils({ children }) {
  return (
    <StyledContainer>
      <StyledChildren>{children}</StyledChildren>
    </StyledContainer>
  )
}

export default ContainerSkils
