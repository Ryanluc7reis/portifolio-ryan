import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 48px;

  :hover {
    border-radius: 7px;
    transition: 0.6s;
    background-color: ${(props) => props.theme.background};
  }
`
const StyledImageContatctsL = styled.div`
  background-image: url('${(props) => props.image}');
  background-size: cover;
  width: 38px;
  height: 36px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 13px;
`
function LinkeImage({ children, image }) {
  return (
    <StyledFlex>
      <StyledImageContatctsL image={image}>{children} </StyledImageContatctsL>
    </StyledFlex>
  )
}
LinkeImage.defaultProps = {
  image: '/Linkedin2.jpg'
}
export default LinkeImage
