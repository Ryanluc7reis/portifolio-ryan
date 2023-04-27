import styled from 'styled-components'

const StyledFlex = styled.div`
  margin-left: 5px;

  :hover {
    transition: 0.6s;
    background-color: ${(props) => props.theme.red};
  }
`
const StyledImageContatctsL = styled.div`
  background-image: url('${(props) => props.image}');
  background-size: cover;
  width: 40px;
  height: 45px;
  cursor: pointer;
`
function LinkeImage({ children, image }) {
  return (
    <StyledFlex>
      <StyledImageContatctsL image={image}>{children} </StyledImageContatctsL>
    </StyledFlex>
  )
}
LinkeImage.defaultProps = {
  image: '/linkedin-image.jpg'
}
export default LinkeImage
