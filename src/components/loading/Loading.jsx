import styled from 'styled-components'
const StyledFlex = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fbfbfb;
  position: fixed;
`
const StyledImage = styled.div`
  background-image: url('${(props) => props.image}');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 160px;
  margin-right: 80px;
  @media (max-width: 768px) {
    padding: 100px;
    align-items: center;
    display: flex;
    justify-content: center;
  }
`

function Loading({ children, image }) {
  return (
    <StyledFlex>
      {children}
      <StyledImage image={image} />
    </StyledFlex>
  )
}

Loading.defaultProps = {
  image: '/loading.png'
}
export default Loading
