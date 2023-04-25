import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
  margin-bottom: 15px;
  margin-left: 5px;

  :hover {
    transition: 0.6s;
    background-color: ${(props) => props.theme.grey};
  }
`
const StyledImageContatctsG = styled.div`
  background-image: url('${(props) => props.image}');
  background-size: cover;
  width: 40px;
  height: 39px;
  cursor: pointer;
`
function GitImage({ children, image }) {
  return (
    <StyledFlex>
      <StyledImageContatctsG image={image}>{children} </StyledImageContatctsG>
    </StyledFlex>
  )
}
GitImage.defaultProps = {
  image: '/gitimagee.jpg'
}
export default GitImage
