import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
`
const StyledChildren = styled.div`
  max-width: 300px;
  height: 320px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`

function ProjectsCards({ children, ...props }) {
  return (
    <StyledContainer>
      <StyledChildren {...props}>{children}</StyledChildren>
    </StyledContainer>
  )
}
export default ProjectsCards
