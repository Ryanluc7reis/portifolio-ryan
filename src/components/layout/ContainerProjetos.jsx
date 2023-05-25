import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
`

const StyledChildren = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`

function ContainerProjetos({ children, ...props }) {
  return (
    <StyledContainer>
      <StyledChildren {...props}>{children}</StyledChildren>
    </StyledContainer>
  )
}

export default ContainerProjetos
