import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 120px;
`

const StyledChildren = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

function ContainerUm({ children, ...props }) {
  return (
    <StyledContainer>
      <StyledChildren {...props}>{children}</StyledChildren>
    </StyledContainer>
  )
}

export default ContainerUm
