import styled from 'styled-components'
import ImageClimaCel from './ImageCelClima'
const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  width: 660px;
  height: 315px;
  background-color: transparent;
`
const StyledImage = styled.div`
  background-image: url('${(props) => props.image}');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  padding: 170px 320px 160px 190px;
  margin-left: 48px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 90px 133px;
    margin-bottom: 215px;
    margin-right: 13px;
  }
`
function ImageClimaDev({ children, image }) {
  return (
    <StyledFlex>
      {children}
      <StyledImage image={image} />
      <ImageClimaCel />
    </StyledFlex>
  )
}

ImageClimaDev.defaultProps = {
  image: '/climadev2.jpg'
}
export default ImageClimaDev
