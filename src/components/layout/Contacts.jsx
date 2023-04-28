import styled from 'styled-components'

const StyledFlex = styled.div`
  margin-bottom: 15px;
  display: flex;
  margin-top: 80px;
  margin-left: 200px;
`
const StyledContacts = styled.div`
  width: 100%;
  max-height: 70px;
  border-radius: 0;
  display: flex;
  gap: 50px;
`

function Contacts({ children }) {
  return (
    <StyledFlex>
      <StyledContacts>{children}</StyledContacts>
    </StyledFlex>
  )
}
export default Contacts
