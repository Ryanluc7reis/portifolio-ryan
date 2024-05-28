import styled from 'styled-components'
import { Link } from 'react-scroll'
import NavOptions from './NavOptions'

const Container = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  background: #252525;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const Name = styled.h3`
  font-size: 22px;
  font-weight: 400;
  font-family: 'Merriweather', serif;
  font-style: italic;
  cursor: pointer;
  background: linear-gradient(45deg, #fffb01, #899205);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const StyledFlexOptions = styled.div`
  display: flex;
`
const Options = styled.h3`
  cursor: pointer;
  color: white;
  font-weight: 500;
  padding: 10px;
  border-radius: 15px;

  :hover {
    transition: 0.2s;
    background-color: #606b01;
  }
  @media (max-width: 540px) {
    display: none;
  }
`
const NavOptionsAlt = styled(NavOptions)`
  display: none;
  @media (max-width: 540px) {
    display: flex;
  }
`
export default function NavBar() {
  return (
    <Container>
      <Name>RyanLucas.</Name>

      <StyledFlexOptions>
        <Options>
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}>
            Início
          </Link>
        </Options>
        <Options>
          <Link to="ContainerDois" spy={true} smooth={true} offset={-100} duration={500}>
            Sobre mim
          </Link>
        </Options>
        <Options>
          <Link to="StyledContainerTitle" spy={true} smooth={true} offset={-100} duration={500}>
            Projetos
          </Link>
        </Options>
        <NavOptionsAlt />
      </StyledFlexOptions>
    </Container>
  )
}
