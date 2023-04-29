import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 49px;
  height: 48px;
`
const StyledImageContatctsG = styled.div`
  background-image: url('${(props) => props.image}');
  background-size: cover;
  width: 38px;
  height: 36px;
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
  image: '/github-logo-24.png'
}
export default GitImage
