import styled from 'styled-components'
const StyledFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 350px;
  margin-left: 14px;
`
const StyledImage = styled.div`
  background-image: url('${(props) => props.image}');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  padding: 172px 259px;
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
    </StyledFlex>
  )
}

ImageClimaDev.defaultProps = {
  image: '/climadev2.jpg'
}
export default ImageClimaDev
