import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 15px 35px;
  border-radius: 7px;
  border: 0;
  font-weight: 600;
  color: #ffffff;
  font-size: 18px;
  background-color: #0a0c00b8;
  box-shadow: 0 5px 5px -2px rgba(90, 90, 3, 0.6);
  cursor: pointer;
  transition: transform 0.3s ease;

  :hover {
    transform: translateY(-3px);
  }
  @media (max-width: 492px) {
    padding: 13px;
  }
`

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
