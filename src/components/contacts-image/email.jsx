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
const StyledImageContatctsE = styled.div`
  background-image: url('${(props) => props.image}');
  background-size: cover;
  width: 40px;
  height: 35px;
  cursor: pointer;
`
function EmailImage({ children, image }) {
  return (
    <StyledFlex>
      <StyledImageContatctsE image={image}>{children} </StyledImageContatctsE>
    </StyledFlex>
  )
}
EmailImage.defaultProps = {
  image: '/email-image.jpg'
}
export default EmailImage
