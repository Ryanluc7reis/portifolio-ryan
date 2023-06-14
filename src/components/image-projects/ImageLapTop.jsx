import styled from 'styled-components'
const StyledFlex = styled.div`
  background-image: url('${(props) => props.image}');
  background-repeat: no-repeat;
  background-size: contain;
  padding: 38px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 30px;
  @media (max-width: 768px) {
    width: 40%;
    height: 40%;
  }
`
const StyledChildren = styled.div`
  width: 610px;
  height: 450px;
`
function ImageLapTop({ children, image }) {
  return (
    <StyledFlex image={image}>
      <StyledChildren>{children}</StyledChildren>
    </StyledFlex>
  )
}

ImageLapTop.defaultProps = {
  image: '/laptop-png.png'
}
export default ImageLapTop
