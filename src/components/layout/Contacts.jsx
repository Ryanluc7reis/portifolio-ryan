import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
`
const StyledContacts = styled.div`
  background: ${(props) => props.theme.white};
  width: 51px;
  height: 205px;
  border-radius: 0px 10px 10px 0px;
`

function Contacts({ children }) {
  return (
    <StyledFlex>
      <StyledContacts>{children}</StyledContacts>
    </StyledFlex>
  )
}
export default Contacts
