import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  margin-top: 10px;
`
const StyledChildren = styled.div`
  width: 90px;
  height: 40px;
  background-color: ${(props) => props.theme.grey};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

function CardsSkills({ children }) {
  return (
    <StyledContainer>
      <StyledChildren>{children}</StyledChildren>
    </StyledContainer>
  )
}

export default CardsSkills
