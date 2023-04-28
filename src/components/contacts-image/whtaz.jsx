import styled from 'styled-components'

const StyledFlex = styled.div`
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 48px;

  :hover {
    border-radius: 7px;
    transition: 0.6s;
    background-color: ${(props) => props.theme.background};
  }
`
const StyledImageContatctsW = styled.div`
  background-image: url('${(props) => props.image}');
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  cursor: pointer;
  margin-bottom: 13px;
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
  image: '/wppnew.jpg'
}
export default WhatzImage
