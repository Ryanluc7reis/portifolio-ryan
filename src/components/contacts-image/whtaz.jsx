import styled from 'styled-components'

const StyledFlex = styled.div`
  margin-bottom: 15px;
  margin-top: 3px;
  margin-left: 5px;

  :hover {
    transition: 0.6s;
    background-color: ${(props) => props.theme.grey};
  }
`
const StyledImageContatctsW = styled.div`
  background-image: url('${(props) => props.image}');
  background-size: cover;
  width: 40px;
  height: 35px;
  cursor: pointer;
`
function WhatzImage({ children, image, ...props }) {
  return (
    <StyledFlex>
      <StyledImageContatctsW image={image} {...props}>
        {children}{' '}
      </StyledImageContatctsW>
    </StyledFlex>
  )
}
WhatzImage.defaultProps = {
  image: '/whatz-imagempreta.jpg'
}
export default WhatzImage
