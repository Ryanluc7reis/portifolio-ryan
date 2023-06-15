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
const ImageSocial = styled.div`
  background-image: url('${(props) => props.imageSocial}');
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

function ImageCelSocial({ children, image, imageSocial }) {
  return (
    <StyledChildren>
      {children}
      <StyledFlex image={image}>
        <ImageSocial imageSocial={imageSocial} />
      </StyledFlex>
    </StyledChildren>
  )
}

ImageCelSocial.defaultProps = {
  image: '/cel.jpg',
  imageSocial: '/socialdevcel.jpg'
}
export default ImageCelSocial
