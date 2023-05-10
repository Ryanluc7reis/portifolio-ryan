import styled from 'styled-components'

const StyledFlex = styled.div`
  margin-bottom: 15px;
  display: flex;
  margin-top: 80px;
  color: white;
`
const StyledContacts = styled.u`
  width: 100%;
  max-height: 70px;
  border-radius: 0;
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 50px;
  color: #3e3e99;
  @media (max-width: 700px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 15px 0;
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
