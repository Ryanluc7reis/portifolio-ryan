import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 49px;
  height: 48px;

  :hover {
    border-radius: 7px;
    transition: 0.6s;
    background-color: ${(props) => props.theme.background};
  }
`
const StyledImageContatctsG = styled.div`
  background-image: url('${(props) => props.image}');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 36px;
  padding: 13px;
  cursor: pointer;
  margin-bottom: 13px;
`
function GitImage({ children, image }) {
  return (
    <StyledFlex>
      <StyledImageContatctsG image={image}>{children} </StyledImageContatctsG>
    </StyledFlex>
  )
}
GitImage.defaultProps = {
  image: '/gitnovo3.jpg'
}
export default GitImage
