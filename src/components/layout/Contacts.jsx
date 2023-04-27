import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
  margin-top: 82px;
  margin-left: 200px;
`
const StyledContacts = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 0;
  display: flex;
  flex-direction: center;
  justify-content: flex-start;
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
