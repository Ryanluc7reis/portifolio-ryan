import styled from 'styled-components'

const StyledFlex = styled.div`
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`
const StyledImageContatctsW = styled.div`
  background-image: url('${(props) => props.image}');
  background-size: cover;
  width: 32px;
  height: 32px;
  cursor: pointer;
`

function WhatzImage({ image, ...props }) {
  return (
    <StyledFlex>
      <StyledImageContatctsW image={image} {...props} />
    </StyledFlex>
  )
}
WhatzImage.defaultProps = {
  image: '/wppnew.jpg'
}
export default WhatzImage
