import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
`

const StyledChildren = styled.div`
  width: 100%;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  position: fixed;
  @media (max-width: 450px) {
    width: 100%;
    height: 78px;
    position: relative;
  }
`

function ConatainerOptions({ children, ...props }) {
  return (
    <StyledContainer>
      <StyledChildren {...props}>{children}</StyledChildren>
    </StyledContainer>
  )
}

export default ConatainerOptions
