import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
`
const StyledChildren = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-right: 120px;
  display: flex;
  justify-content: space-around;
`

function ContainerDoisTitle({ children }) {
  return (
    <StyledContainer>
      <StyledChildren>{children}</StyledChildren>
    </StyledContainer>
  )
}

export default ContainerDoisTitle
