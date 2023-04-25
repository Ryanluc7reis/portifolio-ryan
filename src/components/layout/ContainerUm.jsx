import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 40px;
`

const StyledChildren = styled.div`
  width: 100%;
  height: 100%;
`

function ContainerUm({ children }) {
  return (
    <StyledContainer>
      <StyledChildren>{children}</StyledChildren>
    </StyledContainer>
  )
}

export default ContainerUm
