import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 15px 40px;
  border-radius: 10px;
  border: 0;
  font-weight: bold;
  color: ${(props) => props.theme.black};
  font-size: 16px;
  margin-top: 40px;

  cursor: pointer;

  :hover {
    transition: 0.6s;
    background-color: ${(props) => props.theme.blue};
  }
`

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
