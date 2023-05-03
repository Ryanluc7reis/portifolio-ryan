import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 15px 35px;
  border-radius: 7px;
  border: 0;
  font-weight: bold;
  color: ${(props) => props.theme.black};
  font-size: 16px;
  margin-top: 40px;
  background-color: #a3a2a2;

  cursor: pointer;

  :hover {
    transition: 0.6s;
    background-color: ${(props) => props.theme.brown};
  }
`

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
