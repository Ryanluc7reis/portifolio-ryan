import styled from 'styled-components'

const StyledFlex = styled.div`
  margin-bottom: 15px;
  display: flex;
  margin-top: 80px;
`
const StyledContacts = styled.div`
  width: 100%;
  max-height: 70px;
  border-radius: 0;
  display: flex;
  justify-content: center;
  gap: 50px;
  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

function Contacts({ children }) {
  return (
    <StyledFlex>
      <StyledContacts>{children}</StyledContacts>
    </StyledFlex>
  )
}
export default Contacts
