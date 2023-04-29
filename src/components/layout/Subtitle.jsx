import styled from 'styled-components'

const StyledSubtitle = styled.text`
  font-size: 20px;
  display: flex;
  justify-content: center;
`
const StyledChildren = styled.text`
  max-width: 600px;
  color: #363636;
  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
    margin-left: 25px;
  }
`
function Subtitle({ children, ...props }) {
  return (
    <StyledSubtitle>
      <StyledChildren {...props}>{children}</StyledChildren>
    </StyledSubtitle>
  )
}

export default Subtitle
