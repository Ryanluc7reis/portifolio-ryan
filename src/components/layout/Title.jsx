import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-size: 50px;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.title};
`
const StyledChildren = styled.div`
  margin-top: 30px;
`

const Title = ({ children, ref, ...props }) => {
  return (
    <StyledTitle ref={ref}>
      <StyledChildren {...props}>{children}</StyledChildren>
    </StyledTitle>
  )
}

export default Title
