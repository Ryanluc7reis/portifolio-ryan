import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
`

const StyledChildren = styled.div`
  width: 100%;
  height: 100%;
`

function ContainerInit({ children, ...props }) {
  return (
    <StyledContainer>
      <StyledChildren {...props}>{children}</StyledChildren>
    </StyledContainer>
  )
}

export default ContainerInit
