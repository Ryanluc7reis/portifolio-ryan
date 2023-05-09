import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 48px;
`
const StyledImageContatctsL = styled.div`
  background-image: url('${(props) => props.image}');
  background-size: cover;
  width: 32px;
  height: 32px;
  cursor: pointer;
`

function LinkeImage({ children, image, ...props }) {
  return (
    <StyledFlex>
      <StyledImageContatctsL {...props} image={image}>
        {children}{' '}
      </StyledImageContatctsL>
    </StyledFlex>
  )
}
LinkeImage.defaultProps = {
  image: '/linkedin-logo-24.png'
}
export default LinkeImage
