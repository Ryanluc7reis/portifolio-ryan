import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 15px 35px;
  border-radius: 7px;
  border: 0;
  font-weight: 600;
  color: ${(props) => props.theme.black};
  font-size: 18px;
  margin-top: 30px;
  background-color: #a3a2a2;
  box-shadow: 0px 4px 4px rgba(46, 46, 44, 0.25);

  cursor: pointer;

  :hover {
    transition: 0.6s;
    background-color: ${(props) => props.theme.blackBackground};
  }
`

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
