import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 15px 35px;
  border-radius: 7px;
  border: 0;
  font-weight: 600;
  color: #04003a;
  font-size: 18px;
  margin-top: 25px;
  background-color: #747272;
  box-shadow: 0px 4px 4px rgba(46, 46, 44, 0.25);

  cursor: pointer;

  :hover {
    transition: 0.6s;
    background-color: ${(props) => props.theme.blackBackground};
  }
  @media (max-width: 375px) {
    padding: 13px;
  }
`

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
