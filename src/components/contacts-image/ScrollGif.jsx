import styled from 'styled-components'
const StyledFlex = styled.div`
  display: flex;
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`
const StyledImage = styled.div`
  background-image: url('${(props) => props.image}');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px;
  margin-right: 40px;
`
function ScrollGif({ children, image }) {
  return (
    <StyledFlex>
      {children}
      <StyledImage image={image} />
    </StyledFlex>
  )
}

ScrollGif.defaultProps = {
  image: '/scroll.png'
}
export default ScrollGif
