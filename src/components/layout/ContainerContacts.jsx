import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
`

const StyledChildren = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 25px;
  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
`

function ContainerContacts({ children, ...props }) {
  return (
    <StyledContainer>
      <StyledChildren {...props}>{children}</StyledChildren>
    </StyledContainer>
  )
}

export default ContainerContacts
