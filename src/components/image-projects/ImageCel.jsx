import styled from 'styled-components'
const StyledFlex = styled.div`
  background-image: url('${(props) => props.image}');
  background-repeat: no-repeat;
  background-size: contain;
  padding: 150px;
  margin-right: 40px;

  @media (max-width: 768px) {
  }
`
const StyledChildren = styled.div`
  width: 60px;
  height: 280px;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: transparent;
`

function ImageCel({ children, image }) {
  return (
    <StyledChildren>
      {children}
      <StyledFlex image={image} />
    </StyledChildren>
  )
}

ImageCel.defaultProps = {
  image: '/cel.jpg'
}
export default ImageCel
