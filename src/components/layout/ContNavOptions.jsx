import styled from 'styled-components'

const StyledFlex = styled.div`
  display: flex;
`
const StyledOptions = styled.div`
  font-size: 21px;
  display: flex;
  cursor: pointer;
  color: #797777;

  @media (max-width: 540px) {
    display: none;
    width: 40px;
    height: 40px;
  }

  :hover {
    transition: 0.6s;
    color: ${(props) => props.theme.brown};
  }
`
const StyledChildren = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 30px;
  font-weight: 1000;
`
function ContNavOptions({ children, ...props }) {
  return (
    <StyledFlex>
      <StyledChildren {...props}>
        {children}
        <StyledOptions>Início</StyledOptions>
        <StyledOptions>Sobre mim </StyledOptions>
        <StyledOptions>Habilidades</StyledOptions>
        <StyledOptions>Projetos</StyledOptions>
      </StyledChildren>
    </StyledFlex>
  )
}
export default ContNavOptions
