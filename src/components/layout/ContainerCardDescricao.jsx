import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  justify-content: end;
`
const StyledChildren = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 70px;
`

function ContainerCardDescricao({ children }) {
  return (
    <StyledContainer>
      <StyledChildren>{children}</StyledChildren>
    </StyledContainer>
  )
}

export default ContainerCardDescricao
