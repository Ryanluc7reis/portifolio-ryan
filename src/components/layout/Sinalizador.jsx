import styled from 'styled-components'

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
`
const StyledSinalizador = styled.div`
  background-color: yellow;
  width: 40px;
  height: 8px;
  display: flex;
  align-items: center;
  border-radius: 10px;
`

export default function Sinalizador() {
  return (
    <StyledContainer>
      <StyledSinalizador />
    </StyledContainer>
  )
}
