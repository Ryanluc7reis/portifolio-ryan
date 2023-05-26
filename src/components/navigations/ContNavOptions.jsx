import styled from 'styled-components'
import { Link } from 'react-scroll'

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
    width: 100%;
    height: 40px;
  }

  :hover {
    transition: 0.6s;
    color: #2816cf;
  }
`
const StyledChildren = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 30px;
  font-weight: 1000;
  @media (max-width: 540px) {
    display: none;
    width: 100%;
    height: 40px;
  }
`

function ContNavOptions({ children, ...props }) {
  return (
    <StyledFlex>
      <StyledChildren {...props}>
        {children}
        <StyledOptions>
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
            Início
          </Link>
        </StyledOptions>
        <StyledOptions>
          <Link to="ContainerDois" spy={true} smooth={true} offset={-100} duration={500}>
            Sobre mim
          </Link>
        </StyledOptions>
        <StyledOptions>
          <Link to="StyledContainerTitle" spy={true} smooth={true} offset={-100} duration={500}>
            Projetos
          </Link>
        </StyledOptions>
      </StyledChildren>
    </StyledFlex>
  )
}
export default ContNavOptions
