import styled from 'styled-components'
const StyledFlex = styled.div`
  background-image: url('${(props) => props.image}');
  background-repeat: no-repeat;
  background-size: contain;
  padding: 39px;
  align-items: center;
  display: flex;
  justify-content: center;
`
const StyledChildren = styled.div`
  width: 630px;
  height: 500px;
`
function ImageLapTop({ children, image }) {
  return (
    <StyledFlex image={image}>
      <StyledChildren>{children}</StyledChildren>
    </StyledFlex>
  )
}

ImageLapTop.defaultProps = {
  image: '/laptop-png.png',
  imageSocialDev: '/redes-sociais1.jpg'
}
export default ImageLapTop
