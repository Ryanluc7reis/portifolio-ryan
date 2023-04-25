import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
`
const StyledChildren = styled.div`
  max-width: 300px;
  height: 320px;
  background-color: ${(props) => props.theme.grey};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: column;
  flex-direction: column;
  flex-wrap: nowrap;
  line-height: 40px;
  padding: 20px;
`

function ProjectsCards({ children }) {
  return (
    <StyledContainer>
      <StyledChildren>{children}</StyledChildren>
    </StyledContainer>
  )
}

export default ProjectsCards
