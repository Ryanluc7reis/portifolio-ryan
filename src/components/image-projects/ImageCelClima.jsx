import styled from 'styled-components'
const StyledFlex = styled.div`
  background-image: url('${(props) => props.image}');
  background-repeat: no-repeat;
  background-size: contain;
  padding: 83px;
  margin-right: 115px;
  margin-top: 110px;
  margin-bottom: 49px;
  width: 200px;
  height: 205px;
  background-color: transparent;
  align-items: center;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
  }
`
const StyledChildren = styled.div`
  width: 260px;
  height: 360px;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: transparent;
`
const ImageClima = styled.div`
  background-image: url('${(props) => props.imageClima}');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px;
  padding: 151px 72px;
  margin-bottom: 43px;
  margin-left: 13px;
  margin-right: 8px;
  margin-top: 3px;

  @media (max-width: 768px) {
  }
`

function ImageClimaCel({ children, image, imageClima }) {
  return (
    <StyledChildren>
      {children}
      <StyledFlex image={image}>
        <ImageClima imageClima={imageClima} />
      </StyledFlex>
    </StyledChildren>
  )
}

ImageClimaCel.defaultProps = {
  image: '/cel.jpg',
  imageClima: '/climadevcel.jpg'
}
export default ImageClimaCel
