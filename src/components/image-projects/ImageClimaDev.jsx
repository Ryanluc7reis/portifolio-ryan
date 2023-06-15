import styled from 'styled-components'
import ImageClimaCel from './ImageCelClima'
const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  width: 660px;
  height: 315px;
  background-color: transparent;
  @media (max-width: 768px) {
    width: 340px;
    height: 185px;
    background-color: transparent;
    display: flex;
    align-items: center;
    margin-right: 24px;
  }
`
const StyledImage = styled.div`
  background-image: url('${(props) => props.image}');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  padding: 170px 320px 160px 190px;
  margin-left: 48px;
  @media (max-width: 768px) {
    padding: 85px 133px;
    margin-bottom: 50px;
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
